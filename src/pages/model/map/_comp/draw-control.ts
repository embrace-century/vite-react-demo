import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { useCallback, useEffect, useState } from 'react';
import { ControlPosition, MapRef, useControl, useMap } from 'react-map-gl';

import { line } from '@/mock/features';
import { useAppDispatch } from '@/stores';
import { FeaturesType, setFeatures, setModalOpen } from '@/stores/draw-slice';
import { setSideSheetVisible } from '@/stores/global-slice';

type DrawControlType = {
  position?: ControlPosition;
};

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & DrawControlType;

type DrawEvent = {
  features: FeaturesType[];
  action?: string;
};

/**
 * 新建点未提交的时候，点关闭，要删除点，要获取到drawInstance是个问题
 * 可以通过监听新建弹窗的visible来绕过这个问题，但是这样好像耦合太深，考虑组件封装的思路
 */

export default function DrawControl(props: DrawControlProps) {
  const dispatch = useAppDispatch();
  const { current } = useMap();

  const [drawInstance, setDrewInstance] = useState<MapboxDraw>();
  let touchCreate = false;

  useEffect(() => {
    if (drawInstance) {
      // 加载所有数据
      if (current && drawInstance) {
        current.on('styledata', () => {
          // drawInstance.set(line as any);
        });
      }
    }
  }, [current, drawInstance]);

  const onCreate = (event: DrawEvent) => {
    dispatch(setModalOpen(true));
    const { features } = event;
    touchCreate = true;
    dispatch(setFeatures(features[0])); // geometry数据更新到draw-slice
  };

  const onSelectionchange = useCallback(
    (event: DrawEvent) => {
      if (touchCreate) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        touchCreate = false;
        return;
      }
      const { features } = event;
      // 未选中图形时，features是一个空数组
      if (!features.length) return;
      dispatch(setSideSheetVisible(true));
      dispatch(setFeatures(features[0]));
    },
    [dispatch, touchCreate],
  );

  const onDrawDelete = (event: any) => {
    console.log('🚀 ~ file: draw-control.ts ~ line 58 ~ onDrawDelete ~ event', event);
    dispatch(setSideSheetVisible(false));
    // Todo: 调用实例的delete方法时，是否会触发delete事件
  };

  useControl<MapboxDraw>(
    ({ map }: { map: MapRef }) => {
      map.on('draw.create', onCreate);
      map.on('draw.delete', onDrawDelete);
      map.on('draw.selectionchange', onSelectionchange);
      const draw = new MapboxDraw(props);
      setDrewInstance(draw);
      return draw;
    },
    ({ map }: { map: MapRef }) => {
      map.off('draw.create', onCreate);
      map.on('draw.selectionchange', onSelectionchange);
      map.on('draw.delete', onDrawDelete);
    },
    {
      position: props.position,
    },
  );

  return null;
}
