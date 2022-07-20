import React, { FC, useMemo } from 'react';
import Map, { Layer, LayerProps, Source } from 'react-map-gl';
import { useQuery } from 'react-query';

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
  MAPBOX_ZOOM,
} from '@/constants';

import { buildGeojsonFromPoint } from './helper';
import { INode } from './interface';
import NodeService from './service';

const layerStyle: LayerProps = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf',
  },
};

const Index: FC = () => {
  const { data, isLoading, isError } = useQuery<INode[], Error>(['node_index'], NodeService.findAll, {
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    staleTime: 0,
    cacheTime: 5000,
  });

  const nodeData = useMemo(() => {
    return buildGeojsonFromPoint(data);
  }, [data]);

  if (isLoading) {
    return <div>数据加载中...</div>;
  }
  if (isError) {
    return <div>数据加载出错</div>;
  }

  return (
    <Map
      bearing={MAPBOX_BEARING}
      doubleClickZoom={MAPBOX_DOUBLE_CLICK_ZOOM}
      initialViewState={{
        longitude: MAPBOX_CENTER[0],
        latitude: MAPBOX_CENTER[1],
        zoom: MAPBOX_ZOOM,
      }}
      mapStyle={MAPBOX_STYLE}
      mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      maxZoom={MAPBOX_MAX_ZOOM}
      minZoom={MAPBOX_MIN_ZOOM}
      pitch={MAPBOX_PITCH}
      scrollZoom={MAPBOX_SCROLL_ZOOM}
    >
      <Source
        data={nodeData}
        id="node"
        type="geojson"
      >
        <Layer {...layerStyle} />
      </Source>
    </Map>
  );
};
export default Index;
