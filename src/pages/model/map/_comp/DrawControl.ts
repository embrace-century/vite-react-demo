import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { useEffect, useState } from 'react';
import { ControlPosition, MapRef, useControl } from 'react-map-gl';

import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector, FeaturesType, setCancleCreate, setFeatures, setMode } from '@/stores/draw-slice';
import { setSideSheetVisible } from '@/stores/global-slice';

type DrawControlType = {
  position?: ControlPosition;
};

type DrawControlProps = ConstructorParameters<typeof MapboxDraw>[0] & DrawControlType;

type DrawEvent = {
  features: FeaturesType[];
};

export default function DrawControl(props: DrawControlProps) {
  const dispatch = useAppDispatch();

  const { cancleCreate, features } = useAppSelector(drawSelector);

  const [drawInstance, setDrawInstance] = useState<MapboxDraw>();
  const { position } = props;

  // 新建弹窗关闭后，执行删除操作
  useEffect(() => {
    if (cancleCreate && features?.id && drawInstance) {
      const fetureId = features?.id;
      drawInstance.delete(`${fetureId}`!);
    }
  }, [cancleCreate, features, drawInstance]);

  const onCreate = (event: DrawEvent) => {
    const { features } = event;
    dispatch(setFeatures(features[0]));
    dispatch(setSideSheetVisible(true));
    dispatch(setCancleCreate(false));
    dispatch(setMode('add'));
  };

  useControl<MapboxDraw>(
    ({ map }: { map: MapRef }) => {
      map.on('draw.create', onCreate);
      const draw = new MapboxDraw(props);
      setDrawInstance(draw);
      return draw;
    },
    ({ map }: { map: MapRef }) => {
      map.off('draw.create', onCreate);
    },
    {
      position: position,
    },
  );

  return null;
}
