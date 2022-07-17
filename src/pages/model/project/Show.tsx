import { Table } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { INetwork } from './interface';
import { NetworkService } from './service';

const networkColumns: ColumnProps<INetwork>[] = [
  {
    title: '#',
    render: (_text, _record, index) => `${index + 1}`,
  },
  { dataIndex: 'name', title: '名称' },
  {
    dataIndex: 'id',
    title: '网络ID',
  },
  {
    dataIndex: 'uuid',
    title: 'uuid',
  },
  {
    dataIndex: 'project_id',
    title: '项目ID',
  },
  {
    dataIndex: 'icm_id',
    title: 'ICM_ID',
  },
  { dataIndex: 'icm_type', title: 'ICM 类型' },
  { dataIndex: 'deleted_at', title: '删除时间' },
  { dataIndex: 'created_at', title: '创建时间' },
  { dataIndex: 'updated_at', title: '更新时间' },
];

const Show: React.FC = () => {
  const { projectId } = useParams();

  const { data, isLoading, isError } = useQuery<INetwork[], Error>(['network_index', { projectId }], () =>
    NetworkService.findAll(projectId!),
  );

  console.log(`🚀 ~ file: show.tsx ~ line 38 ~ data`, data);

  if (isLoading) {
    return <div>数据加载中...</div>;
  }
  if (isError) {
    return <div>数据加载出错</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold text-black">我的项目：# {projectId}</div>
      <div className="mt-8">
        <Table<INetwork>
          columns={networkColumns}
          dataSource={data}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default Show;
