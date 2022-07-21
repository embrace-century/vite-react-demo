// @ts-nocheck
import { Table } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import React, { FC, useMemo } from 'react';
import { useQuery } from 'react-query';

import { useAppDispatch } from '@/stores';
import { FeaturesType, setNodeId } from '@/stores/draw-slice';
import { setSideSheetVisible } from '@/stores/global-slice';

import { buildGeojsonFromPoint } from '../../node-layer/helper';
import { IPoint } from '../interface';
import NodeService from './node/service';

type IColumns = IPoint & {
  id: string | number;
};

const mapDataColumns: ColumnProps<IColumns>[] = [
  { dataIndex: 'id', title: 'ID' },
  { dataIndex: 'lon', title: '经度' },
  { dataIndex: 'lat', title: '纬度' },
  { dataIndex: 'flood_level', title: '洪水高程' },
  { dataIndex: 'ground_level', title: '地面高程' },
];

export const MapDataTable: FC = () => {
  const { data: nodeData, isLoading, isError } = useQuery<INode[], Error>(['node.index'], NodeService.findAll);
  const dispatch = useAppDispatch();

  const scroll = { x: 1000, y: 850 };
  const rowColor = 'rgb(244,245,245)';

  const dataSource = useMemo(() => {
    if (nodeData) {
      const geojson = buildGeojsonFromPoint(nodeData)!;

      return geojson.features.map((feature: FeaturesType) => {
        const { id, properties, geometry } = feature;
        // Todo: 这里要优化，只考虑的点的情况，没考虑线的情况
        return { id, ...properties, lon: geometry.coordinates[0], lat: geometry.coordinates[1] };
      });
    } else {
      return [];
    }
  }, [nodeData]);

  if (isLoading) {
    return <div>数据加载中...</div>;
  }
  if (isError) {
    return <div>数据加载出错</div>;
  }

  const handleRow = (record, index) => {
    const rowClick = () => {
      const { id } = record;
      dispatch(setNodeId(id));
      dispatch(setSideSheetVisible(true));
    };
    if (index % 2 === 0) {
      return {
        style: {
          background: rowColor,
        },
        onClick: rowClick,
      };
    } else {
      return {
        onClick: rowClick,
      };
    }
  };

  return (
    <Table<IColumns>
      columns={mapDataColumns}
      dataSource={dataSource}
      pagination={false}
      scroll={scroll}
      onRow={handleRow}
    />
  );
};
