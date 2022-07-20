import React, { FC, memo } from 'react';
import { CircleLayer, Layer, Source } from 'react-map-gl';
import { useQuery } from 'react-query';

import colors from '@/constants/colors';
import { buildGeojsonFromPoint } from '@/pages/model/node-layer/helper';
import { INode } from '@/pages/model/node-layer/interface';
import NodeService from '@/pages/model/node-layer/service';

import { useNodeData, useUpdateNoteData } from '../../map-context';

const Node: FC = memo(function Node() {
  const updateNodeData = useUpdateNoteData();

  const { data, isLoading, isError } = useQuery<INode[], Error>(['node.index'], NodeService.findAll, {
    onSuccess: (data) => {},
    onSettled: (data) => {
      updateNodeData(data);
    },
  });
  console.log(`🚀 ~ file: node.tsx ~ line 11 ~ nodeDatanodeDatanodeDatanodeDatanodeData`, useNodeData());

  // const nodeGeojson = useMemo(() => {
  //   return buildGeojsonFromPoint(data);
  // }, [data]);

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
    <Source
      data={buildGeojsonFromPoint(data)}
      id="node"
      type="geojson"
    >
      <Layer {...layerStyle} />
    </Source>
  );
});

export default Node;
