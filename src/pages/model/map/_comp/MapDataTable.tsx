import { Table } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import React, { FC, useContext, useMemo } from 'react';

import { FeaturesType } from '@/stores/draw-slice';

import { IPoint } from '../interface';
import { MapFeatures } from '../map-context';

type IColumns = IPoint & {
  id: string | number;
};

const mapDataColumns: ColumnProps<IColumns>[] = [
  { dataIndex: 'lon', title: '经度' },
  { dataIndex: 'lat', title: '纬度' },
  { dataIndex: 'flood_level', title: '洪水高程' },
  { dataIndex: 'ground_level', title: '地面高程' },
  { dataIndex: 'x', title: 'x' },
  { dataIndex: 'y', title: 'y' },
];

export const MapDataTable: FC = () => {
  const nodeData = useContext(MapFeatures);

  const dataSource = useMemo(() => {
    return nodeData.features.map((feature: FeaturesType) => {
      const { properties, geometry } = feature;
      return { ...properties, lon: geometry.coordinates[0], lat: geometry.coordinates[1] };
    });
  }, [nodeData.features]);
  console.log('🚀 ~ file: MapDataTable.tsx ~ line 34 ~ dataSource ~ dataSource', dataSource);

  return (
    <Table<IColumns>
      columns={mapDataColumns}
      dataSource={dataSource}
      pagination={true}
    />
  );
};
