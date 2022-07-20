import { IconPlus } from '@douyinfe/semi-icons';
import { Breadcrumb, Button, Card, Popconfirm, Space, Table, Typography } from '@douyinfe/semi-ui';
import { ColumnProps } from '@douyinfe/semi-ui/lib/es/table';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import NewNetwork from './_comp/NewNetwork';
import { INetwork } from './interface';
import { NetworkService } from './service';

const { Title } = Typography;

const Show: React.FC = () => {
  const { projectId } = useParams();
  const [create, setCreate] = useState(false);

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
      render: (_text, record, _index) => {
        return (
          <div className="flex space-x-4">
            <Link to={`/network/${record.id}`}>
              <Button
                theme="borderless"
                type="primary"
              >
                查看
              </Button>
            </Link>

            <Popconfirm
              cancelText="否"
              content="此修改将不可逆"
              // okButtonProps={{ loading: isLoadingRemove }}
              okText="是"
              position="top"
              title="确认删除吗？"
              // onConfirm={() => mutateRemove({ id })}
            >
              <Button
                theme="borderless"
                type="danger"
              >
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const { data, isLoading, isError } = useQuery<INetwork[], Error>(['network.index', { projectId }], () =>
    NetworkService.findAll({ projectId: projectId! }),
  );

  if (isLoading) {
    return <div>数据加载中...</div>;
  }

  if (isError) {
    return <div>数据加载出错</div>;
  }

  return (
    <>
      <Breadcrumb
        className="mb-4"
        compact={false}
      >
        <Breadcrumb.Item>模型编排管理</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/project">我的项目</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>管网方案列表</Breadcrumb.Item>
      </Breadcrumb>

      <Card>
        <Title heading={6}>管网方案列表</Title>

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
