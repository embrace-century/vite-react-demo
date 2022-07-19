import { Switch, Typography } from '@douyinfe/semi-ui';
import React, { useCallback, useState } from 'react';
import Map from 'react-map-gl';

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

import DrawControl from './DrawControl';

const MAPBOX_STYLE_CONST = {
  version: 8,
  name: 'Positron',
  metadata: {},
  sources: {},
  layers: [],
};

export const MapboxInstance = () => {
  const { Title } = Typography;
  const [open, setOpen] = useState(false);
  const [mapStyle, setMapStyle] = useState<any>(open ? MAPBOX_STYLE : MAPBOX_STYLE_CONST);

  const handleSwitchChange = useCallback((switchValue: boolean) => {
    setMapStyle(switchValue ? MAPBOX_STYLE : MAPBOX_STYLE_CONST);
    setOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex items-center">
        <Title
          heading={6}
          style={{ margin: 8 }}
        >
          {open ? '正常加载' : '无底图模式'}
        </Title>
        <Switch
          aria-label="a switch for demo"
          checked={open}
          onChange={handleSwitchChange}
        />
      </div>

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
        zoom={MAPBOX_ZOOM}
      >
        <DrawControl
          controls={{
            point: true,
            line_string: true,
            trash: true,
          }}
          defaultMode="simple_select"
          displayControlsDefault={false}
          position="top-left"
        />
      </Map>
    </div>
  );
};
