import { Modal, Switch, Typography } from '@douyinfe/semi-ui';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Map, { MapLayerMouseEvent } from 'react-map-gl';

import { postPoint } from '@/api/draw';
import { AddForm } from '@/components/form';
import {
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_BEARING,
  MAPBOX_DOUBLE_CLICK_ZOOM,
  MAPBOX_MAX_ZOOM,
  MAPBOX_MIN_ZOOM,
  MAPBOX_PITCH,
  MAPBOX_SCROLL_ZOOM,
  MAPBOX_STYLE,
  MAPBOX_ZOOM,
} from '@/constants/default-settings';
import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector, setModalOpen } from '@/stores/draw-slice';

import DrawControl from './draw-control';

const MAPBOX_STYLE_CONST = {
  version: 8,
  name: 'Positron',
  metadata: {},
  sources: {},
  layers: [],
};

export const MapboxInstance = () => {
  const dispatch = useAppDispatch();
  const { modalIsOpen, features } = useAppSelector(drawSelector);

  const draw = useRef<any>();
  // semi design组件解构
  const { Title } = Typography;
  // 组件内部state，考虑提取到状态管理
  const [open, setOpen] = useState(false);
  const [mapStyle, setMapStyle] = useState<any>(open ? MAPBOX_STYLE : MAPBOX_STYLE_CONST);

  // 改变弹窗的展示内容（Todo: 增加一个动态配置表单）
  useEffect(() => {}, [draw]);

  // mapbox的事件处理
  const handleMapCLick = useCallback(
    (event: MapLayerMouseEvent) => {
      // 记录点击的经纬度
      const { lngLat } = event;
      dispatch(setModalOpen(true));
    },
    [dispatch],
  );

  const handleSwitchChange = useCallback((switchValue: boolean) => {
    setMapStyle(switchValue ? MAPBOX_STYLE : MAPBOX_STYLE_CONST);
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Map
        bearing={MAPBOX_BEARING}
        doubleClickZoom={MAPBOX_DOUBLE_CLICK_ZOOM}
        initialViewState={{
          longitude: 114.380512,
          latitude: 30.479635,
          zoom: 3.5,
        }}
        mapStyle={mapStyle}
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        maxZoom={MAPBOX_MAX_ZOOM}
        minZoom={MAPBOX_MIN_ZOOM}
        pitch={MAPBOX_PITCH}
        scrollZoom={MAPBOX_SCROLL_ZOOM}
        style={{ width: '90vw', height: '90vh' }}
        zoom={MAPBOX_ZOOM}
        // onClick={handleMapCLick}
      >
        <DrawControl
          controls={{
            polygon: true,
            point: true,
            line_string: true,
            trash: true,
          }}
          defaultMode="simple_select"
          displayControlsDefault={false}
          position="top-left"
        />
      </Map>
      <div className="flex items-center">
        <Title
          heading={6}
          style={{ margin: 8 }}
        >
          {open ? '有地图' : '无地图'}
        </Title>
        <Switch
          aria-label="a switch for demo"
          checked={open}
          onChange={handleSwitchChange}
        />
      </div>
      <AddForm />
    </>
  );
};
