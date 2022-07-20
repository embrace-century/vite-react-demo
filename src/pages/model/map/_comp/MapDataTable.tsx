// @ts-nocheck
import { Table } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import React, { FC, useMemo } from 'react';

import { FeaturesType } from '@/stores/draw-slice';

import { buildGeojsonFromPoint } from '../../node-layer/helper';
import { IPoint } from '../interface';
import { useNodeData } from '../map-context';

type IColumns = IPoint & {
  id: string | number;
};

const mapDataColumns: ColumnProps<IColumns>[] = [
  { dataIndex: 'lon', title: '经度' },
  { dataIndex: 'lat', title: '纬度' },
  { dataIndex: 'flood_level', title: '洪水高程' },
  { dataIndex: 'ground_level', title: '地面高程' },
];

export const MapDataTable: FC = () => {
  const nodeData = useNodeData();

  const dataSource = useMemo(() => {
    if (nodeData) {
      const geojson = buildGeojsonFromPoint(nodeData)!;

      return geojson.features.map((feature: FeaturesType) => {
        const { properties, geometry } = feature;
        // Todo: 这里要优化，只考虑的点的情况，没考虑线的情况
        return { ...properties, lon: geometry.coordinates[0], lat: geometry.coordinates[1] };
      });
    } else {
      return [];
    }
  }, [nodeData]);

  return (
    <Table<IColumns>
      columns={mapDataColumns}
      dataSource={dataSource}
      pagination={true}
    />
  );
};
