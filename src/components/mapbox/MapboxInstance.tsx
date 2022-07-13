import MapboxDraw from '@mapbox/mapbox-gl-draw';
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

import DrawControl from './draw-control';

const MAPBOX_STYLE_CONST = {
  version: 8,
  name: 'Positron',
  metadata: {},
  sources: {},
  layers: [],
};

export const MapboxInstance = () => {
  const [features, setFeatures] = useState({});

  const onUpdate = useCallback((e: any) => {
    setFeatures((currFeatures) => {
      const newFeatures: any = { ...currFeatures };
      for (const f of e.features) {
        newFeatures[f.id] = f;
      }
      return newFeatures;
    });
  }, []);

  const onDelete = useCallback((e: any) => {
    setFeatures((currFeatures) => {
      const newFeatures: any = { ...currFeatures };
      for (const f of e.features) {
        delete newFeatures[f.id];
      }
      return newFeatures;
    });
  }, []);
  return (
    <Map
      bearing={MAPBOX_BEARING}
      doubleClickZoom={MAPBOX_DOUBLE_CLICK_ZOOM}
      initialViewState={{
        longitude: 114.380512,
        latitude: 30.479635,
        zoom: 3.5,
      }}
      mapStyle={MAPBOX_STYLE_CONST}
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      maxZoom={MAPBOX_MAX_ZOOM}
      minZoom={MAPBOX_MIN_ZOOM}
      pitch={MAPBOX_PITCH}
      scrollZoom={MAPBOX_SCROLL_ZOOM}
      style={{ width: '100vw', height: '80vh' }}
      zoom={MAPBOX_ZOOM}
    >
      <DrawControl
        controls={{
          polygon: true,
          point: true,
          line_string: true,
          trash: true,
        }}
        defaultMode="draw_polygon"
        displayControlsDefault={false}
        position="top-left"
        onCreate={onUpdate}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </Map>
  );
};
