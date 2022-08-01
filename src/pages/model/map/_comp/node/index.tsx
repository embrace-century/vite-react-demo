import { Feature } from 'geojson';
import React, { FC, memo, useContext, useEffect } from 'react';
import { CircleLayer, Layer, Source } from 'react-map-gl';
import { useQuery } from 'react-query';

import colors from '@/constants/colors';
import { featureData } from '@/mock/features';
import { buildGeojsonFromPoint } from '@/pages/model/node-layer/helper';
import { INode } from '@/pages/model/node-layer/interface';
import NodeService from '@/pages/model/node-layer/service';
import { useAppSelector } from '@/stores';
import { drawSelector } from '@/stores/draw-slice';

import { MapLayerContext } from '../../context';
import Add from './add';
import Edit from './edit';

const Node: FC = memo(function Node() {
  const { mode } = useAppSelector(drawSelector);
  // const { data, isLoading, isError } = useQuery<INode[], Error>(['node.index'], NodeService.findAll);

  const mapLayer = useContext(MapLayerContext);
  const { setLayers } = mapLayer;

  // if (isLoading) {
  //   return <div>数据加载中...</div>;
  // }
  // if (isError) {
  //   return <div>数据加载出错</div>;
  // }

  // 定义layers的事件
  const nodeClick = (event: any) => {
    console.log('🚀 ~ file: index.tsx ~ line 33 ~ nodeClick ~ event', event);
    console.log('node has been clicked');
  };

  useEffect(() => {
    setLayers('node', [nodeClick]);
  }, []);

  const layerStyle: CircleLayer = {
    id: 'node',
    type: 'circle',
    paint: {
      'circle-color': colors.sky[500],
      'circle-radius': 4,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff',
    },
  };

  return (
    <>
      <Source
        // data={buildGeojsonFromPoint(data)}
        data={featureData as Feature}
        id="node"
        type="geojson"
      >
        <Layer {...layerStyle} />
      </Source>
      {mode === 'add' ? <Add /> : <Edit />}
    </>
  );
});

export default Node;
