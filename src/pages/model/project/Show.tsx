import { IconPlus } from '@douyinfe/semi-icons';
import { Button, Card, Space, Table, Typography } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import NewNetwork from './_comp/NewNetwork';
import { INetwork } from './interface';
import { NetworkService } from './service';

const { Title } = Typography;

const networkColumns: ColumnProps<INetwork>[] = [
  // {
  //   title: '#',
  //   render: (_text, _record, index) => `${index + 1}`,
  // },
  // {
  //   dataIndex: 'id',
  //   title: '#',
  // },
  { dataIndex: 'name', title: '名称' },
  {
    dataIndex: 'scenario_id',
    title: '场景 ID',
  },
  // {
  //   dataIndex: 'uuid',
  //   title: 'uuid',
  // },
  // {
  //   dataIndex: 'project_id',
  //   title: '项目ID',
  // },
  // {
  //   dataIndex: 'icm_id',
  //   title: 'ICM_ID',
  // },
  // { dataIndex: 'icm_type', title: 'ICM 类型' },
  // { dataIndex: 'deleted_at', title: '删除时间' },
  // { dataIndex: 'created_at', title: '创建时间' },
  // { dataIndex: 'updated_at', title: '更新时间' },
  {
    dataIndex: 'action',
    title: '操作',
    render: (_text, record, _index) => (
      <div className="flex space-x-4">
        <Button
          theme="borderless"
          type="primary"
        >
          查看
        </Button>
        <Button
          theme="borderless"
          type="danger"
        >
          删除
        </Button>
      </div>
    ),
  },
];

const Show: React.FC = () => {
  const { projectId } = useParams();

  const [create, setCreate] = useState(false);

  const { data, isLoading, isError } = useQuery<INetwork[], Error>(['network.index', { projectId }], () =>
    NetworkService.findAll(projectId!),
  );

  if (isLoading) {
    return <div>数据加载中...</div>;
  }

  if (isError) {
    return <div>数据加载出错</div>;
  }

  return (
    <>
      <Card>
        <Title heading={6}>我的项目</Title>

        <div className="mt-6">
          <div className="button-group">
            <Space>
              <Button
                icon={<IconPlus />}
                theme="solid"
                type="primary"
                onClick={() => {
                  setCreate(true);
                }}
              >
                新建
              </Button>
            </Space>
          </div>

          <Table<INetwork>
            columns={networkColumns}
            dataSource={data}
            pagination={false}
          />
        </div>
      </Card>

      <NewNetwork
        visible={create}
        onClose={() => setCreate(false)}
      />
    </>
  );
};

export default Show;
