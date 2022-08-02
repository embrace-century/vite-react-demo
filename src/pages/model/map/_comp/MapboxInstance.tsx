import { Switch, Typography } from '@douyinfe/semi-ui';
import { Style } from 'mapbox-gl';
import React, { useCallback, useContext, useRef, useState } from 'react';
import Map, { MapLayerMouseEvent, ViewStateChangeEvent } from 'react-map-gl';

import {
  MAPBOX_ACCESS_TOKEN,
  MAPBOX_BEARING,
  MAPBOX_CENTER,
  MAPBOX_DOUBLE_CLICK_ZOOM,
  MAPBOX_MAX_ZOOM,
  MAPBOX_MIN_ZOOM,
  MAPBOX_PITCH,
  MAPBOX_SCROLL_ZOOM,
  MAPBOX_STYLE,
  MAPBOX_STYLE_BLANK,
  MAPBOX_ZOOM,
} from '@/constants/default-settings';
import { useAppDispatch } from '@/stores';
import { setCancleCreate, setMode, setNodeId } from '@/stores/draw-slice';
import { setSideSheetVisible } from '@/stores/global-slice';

import { MapLayerContext } from '../context';
import DrawControl from './DrawControl';
import Node from './node';

const { Title } = Typography;

export const MapboxInstance = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(true);

  const [cursor, setCursor] = useState<string>('grab');

  const mapRef = useRef(null);
  const [mapStyle, setMapStyle] = useState<string | Style>(open ? MAPBOX_STYLE : MAPBOX_STYLE_BLANK);

  const [viewState, setViewState] = React.useState({
    longitude: MAPBOX_CENTER[0],
    latitude: MAPBOX_CENTER[1],
    zoom: MAPBOX_ZOOM,
  });

  const mapLayerHandle = useContext(MapLayerContext);
  const { layerHandles } = mapLayerHandle;

  // 地图移动赋值视角
  const handleMapMove = useCallback((e: ViewStateChangeEvent) => {
    setViewState(e.viewState);
  }, []);

  // 赋值到window对象
  const handleMapLoad = useCallback(() => {
    window.map = mapRef.current;
  }, []);

  const handleSwitchChange = useCallback((v: boolean) => {
    setMapStyle(v ? MAPBOX_STYLE : MAPBOX_STYLE_BLANK);
    setOpen((prev) => !prev);
  }, []);

  const onClick = useCallback(
    (event: MapLayerMouseEvent) => {
      const feature = event.features?.[0];
      console.log('🚀 ~ file: MapboxInstance.tsx ~ line 66 ~ MapboxInstance ~ event', event);

      if (feature) {
        // if (feature.layer.id === 'node') {
        //   dispatch(setNodeId(feature.id as number));
        //   dispatch(setMode('edit'));
        //   dispatch(setSideSheetVisible(true));
        //   dispatch(setCancleCreate(false));
        // }
        for (const [key, value] of Object.entries(layerHandles)) {
          value.forEach((fn) => {
            fn(event);
          });
        }
      }
    },
    [layerHandles],
  );

  const onMouseEnter = useCallback(() => setCursor('pointer'), []);
  const onMouseLeave = useCallback(() => setCursor('grab'), []);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mb-4 flex items-center justify-between">
        <Title heading={6}>管网方案详情</Title>

        <div className="flex items-center">
          <Title
            heading={6}
            style={{ marginRight: 8 }}
          >
            {open ? '已开启底图' : '已关闭底图'}
          </Title>
          <Switch
            checked={open}
            size="small"
            onChange={handleSwitchChange}
          />
        </div>
      </div>
      <div
        className="relative"
        id="map-container"
      >
        <Map
          {...viewState}
          ref={mapRef}
          reuseMaps
          bearing={MAPBOX_BEARING}
          cursor={cursor}
          doubleClickZoom={MAPBOX_DOUBLE_CLICK_ZOOM}
          interactiveLayerIds={['node']}
          mapStyle={mapStyle}
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
          maxZoom={MAPBOX_MAX_ZOOM}
          minZoom={MAPBOX_MIN_ZOOM}
          pitch={MAPBOX_PITCH}
          scrollZoom={MAPBOX_SCROLL_ZOOM}
          style={{ width: '100%', height: '80vh' }}
          onClick={onClick}
          onLoad={handleMapLoad}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMove={handleMapMove}
        >
          <Node />

          <DrawControl
            controls={{
              point: true,
              line_string: true,
              // trash: true,
            }}
            defaultMode="simple_select"
            displayControlsDefault={false}
            position="top-left"
          />
        </Map>
      </div>
    </div>
  );
};
