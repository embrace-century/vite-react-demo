import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { useEffect, useState } from 'react';
import { ControlPosition, MapRef, useControl, useMap } from 'react-map-gl';

import { useAppDispatch } from '@/stores';
import { GeoMetryType, setGeometry, setModalOpen } from '@/stores/draw-slice';
import { setSideSheetVisible } from '@/stores/global-slice';

type DrawControlType = {
  position?: ControlPosition;
};

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & DrawControlType;

type FeaturesType = {
  geometry: GeoMetryType;
};

type DrawEvent = {
  features: FeaturesType[];
  action?: string;
};

const line = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [
          [114.40080642700195, 30.52064247832281],
          [114.39934730529785, 30.457552461000667],
        ],
      },
    },
  ],
};

export default function DrawControl(props: DrawControlProps) {
  const dispatch = useAppDispatch();
  const { current } = useMap();

  const [drawInstance, setDrewInstance] = useState<MapboxDraw>();

  useEffect(() => {
    if (current && drawInstance) {
      current.on('styledata', () => {
        drawInstance.set(line as any);
      });
    }
  }, [current, drawInstance]);

  // drawe.create 事件
  const onCreate = (event: DrawEvent) => {
    dispatch(setModalOpen(true));
    const { features } = event;
    const {
      geometry: { coordinates, type },
    } = features[0];
    // Todo: 判断绘制的图形的类型展示不同的表单内容
  };
  // draw.selectionchange 事件
  const onSelectionchange = (event: DrawEvent) => {
    const { features } = event;
    const { geometry } = features[0];
    // 未选中点、线、面时，features是一个空数组
    if (!features.length) return;
    dispatch(setSideSheetVisible(true));
    dispatch(setGeometry(geometry));
  };

  useControl<MapboxDraw>(
    ({ map }: { map: MapRef }) => {
      map.on('draw.create', onCreate);
      // map.on('draw.update', handleDraw);
      // map.on('draw.delete', handleDraw);
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
