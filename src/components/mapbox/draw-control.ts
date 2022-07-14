import MapboxDraw from '@mapbox/mapbox-gl-draw';
import type { ControlPosition, MapRef } from 'react-map-gl';
import { useControl } from 'react-map-gl';

import { useAppDispatch } from '@/stores';
import { setModalOpen } from '@/stores/draw-slice';

type DrawControlType = {
  position?: ControlPosition;
};

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & DrawControlType;

type FeaturesType = {
  geometry: number[];
  type: string;
  properties: any[];
};

type DrawEvent = {
  features: FeaturesType[];
  action?: string;
};

export default function DrawControl(props: DrawControlProps) {
  const dispatch = useAppDispatch();
  // 监听drawe事件
  const handleDraw = (event: DrawEvent) => {
    const { features } = event;
    const { type, geometry } = features[0];
    // Todo: 判断绘制的图形的类型
    dispatch(setModalOpen(true));
  };

  useControl<MapboxDraw>(
    ({ map }: { map: MapRef }) => {
      map.on('draw.create', handleDraw);
      map.on('draw.update', handleDraw);
      map.on('draw.delete', handleDraw);
      return new MapboxDraw(props);
    },
    ({ map }: { map: MapRef }) => {
      map.off('draw.create', handleDraw);
      map.off('draw.update', handleDraw);
      map.off('draw.delete', handleDraw);
    },
    {
      position: props.position,
    },
  );

  return null;
}
