import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { useCallback, useEffect, useState } from 'react';
import { ControlPosition, MapRef, useControl } from 'react-map-gl';

import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector, FeaturesType, setCancleCreate, setFeatures, setModalOpen } from '@/stores/draw-slice';
import { setSideSheetVisible } from '@/stores/global-slice';

type DrawControlType = {
  position?: ControlPosition;
};

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & DrawControlType;

type DrawEvent = {
  features: FeaturesType[];
};

/**
 * 新建点未提交的时候，点关闭，要删除点，要获取到drawInstance是个问题
 * 使用redux也不合适
 */

export default function DrawControl(props: DrawControlProps) {
  const dispatch = useAppDispatch();

  const { cancleCreate, features } = useAppSelector(drawSelector);

  const [drawInstance, setDrawInstance] = useState<MapboxDraw>();
  const { position } = props;
  let touchCreate = false;

  // 新建弹窗关闭后，执行删除操作
  useEffect(() => {
    if (cancleCreate && features?.id && drawInstance) {
      const fetureId = features?.id;
      drawInstance.delete(`${fetureId}`!);
    }
  }, [cancleCreate, features, drawInstance]);

  const onCreate = (event: DrawEvent) => {
    const { features } = event;
    console.log(`🚀 ~ file: DrawControl.ts ~ line 43 ~ onCreate ~ features`, features);
    touchCreate = true;
    dispatch(setFeatures(features[0]));
    dispatch(setModalOpen(true));
    dispatch(setCancleCreate(false));
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

  useControl<MapboxDraw>(
    ({ map }: { map: MapRef }) => {
      map.on('draw.create', onCreate);
      map.on('draw.selectionchange', onSelectionchange);
      const draw = new MapboxDraw(props);
      setDrawInstance(draw);
      return draw;
    },
    ({ map }: { map: MapRef }) => {
      map.off('draw.create', onCreate);
      map.on('draw.selectionchange', onSelectionchange);
    },
    {
      position: position,
    },
  );

  return null;
}
