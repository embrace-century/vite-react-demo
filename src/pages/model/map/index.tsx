import { Breadcrumb, Card, Col, Row, Typography } from '@douyinfe/semi-ui';
import React, { createContext, useMemo } from 'react';
import { useQuery } from 'react-query';

import { buildGeojsonFromPoint } from '@/pages/model/node-layer/helper';
import { INode } from '@/pages/model/node-layer/interface';
import NodeService from '@/pages/model/node-layer/service';

import { AddForm } from './_comp/AddForm';
import { EditForm } from './_comp/EditForm';
import { MapboxInstance } from './_comp/MapboxInstance';
import { MapDataTable } from './_comp/MapDataTable';
import { MapFeatures } from './map-context';

const { Title } = Typography;

const Map = () => {
  const { data, isLoading, isError } = useQuery<INode[], Error>(['node_index'], NodeService.findAll);

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
    <>
      <Breadcrumb
        className="mb-4"
        compact={false}
      >
        <Breadcrumb.Item>模型编排管理</Breadcrumb.Item>
        <Breadcrumb.Item>我的项目</Breadcrumb.Item>
        <Breadcrumb.Item>管网方案详情</Breadcrumb.Item>
      </Breadcrumb>

      <MapFeatures.Provider value={nodeData}>
        <Row gutter={24}>
          <Col span={14}>
            <Card>
              <Title heading={6}>管网方案详情</Title>

              <div className="mt-6">
                <MapboxInstance />
                <EditForm />
                <AddForm />
              </div>
            </Card>
          </Col>

          <Col span={10}>
            <Card>
              <Title heading={6}>node 数据</Title>

              <div className="mt-6">
                <MapDataTable />
              </div>
            </Card>
          </Col>
        </Row>
      </MapFeatures.Provider>
    </>
  );
};

export default Map;
