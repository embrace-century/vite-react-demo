import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { useEffect, useState } from 'react';
import { ControlPosition, MapRef, useControl, useMap } from 'react-map-gl';

import { deletePoint } from '@/api/draw';
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

export default function DrawControl(props: DrawControlProps) {
  const dispatch = useAppDispatch();
  const { current } = useMap();

  const [drawInstance, setDrewInstance] = useState<MapboxDraw>();

  useEffect(() => {
    if (drawInstance) {
      // 加载所有数据
      if (current && drawInstance) {
        current.on('styledata', () => {
          drawInstance.set(line as any);
        });
      }
    }
  }, [current, drawInstance]);

  // drawe.create 事件
  const onCreate = (event: DrawEvent) => {
    dispatch(setModalOpen(true));
    const { features } = event;
    dispatch(setSideSheetVisible(false)); // 创建完成不展示侧边栏
    dispatch(setFeatures(features[0])); // geometry数据更新到draw-slice
  };
  // draw.selectionchange 事件
  const onSelectionchange = (event: DrawEvent) => {
    console.log('🚀 ~ file: draw-control.ts ~ line 54 ~ onSelectionchange ~ onSelectionchange');

    const { features } = event;
    // 未选中点、线、面时，features是一个空数组
    if (!features.length) return;
    dispatch(setSideSheetVisible(true));
    dispatch(setFeatures(features[0]));
  };

  const onDrawDelete = (event: any) => {
    console.log('🚀 ~ file: draw-control.ts ~ line 58 ~ onDrawDelete ~ event', event);
    dispatch(setSideSheetVisible(false));
  };

  useControl<MapboxDraw>(
    ({ map }: { map: MapRef }) => {
      map.on('draw.create', onCreate);
      // map.on('draw.update', handleDraw);
      map.on('draw.delete', onDrawDelete);
      map.on('draw.selectionchange', onSelectionchange);
      const draw = new MapboxDraw(props);
      setDrewInstance(draw);
      return draw;
    },
    ({ map }: { map: MapRef }) => {
      map.off('draw.create', onCreate);
      map.on('draw.selectionchange', onSelectionchange);
      // map.off('draw.update', handleDraw);
      // map.off('draw.delete', handleDraw);
    },
    {
      position: props.position,
    },
  );

  return null;
}
