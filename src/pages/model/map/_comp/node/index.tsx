import React, { FC, memo } from 'react';
import { CircleLayer, Layer, Source } from 'react-map-gl';
import { useQuery } from 'react-query';

import colors from '@/constants/colors';
import { buildGeojsonFromPoint } from '@/pages/model/node-layer/helper';
import { INode } from '@/pages/model/node-layer/interface';
import NodeService from '@/pages/model/node-layer/service';

import { useUpdateNoteData } from '../../map-context';
import Edit from './edit';

const Node: FC = memo(function Node() {
  const updateNodeData = useUpdateNoteData();

  const { data, isLoading, isError } = useQuery<INode[], Error>(['node.index'], NodeService.findAll, {
    onSettled: (data) => {
      updateNodeData(data);
    },
  });

  if (isLoading) {
    return <div>数据加载中...</div>;
  }
  if (isError) {
    return <div>数据加载出错</div>;
  }

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
        data={buildGeojsonFromPoint(data)}
        id="node"
        type="geojson"
      >
        <Layer {...layerStyle} />
      </Source>

      <Edit />
    </>
  );
});

export default Node;