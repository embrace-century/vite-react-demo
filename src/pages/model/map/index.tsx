import { Breadcrumb, Card, Col, Row, Typography } from '@douyinfe/semi-ui';
import React from 'react';

import { AddForm } from './_comp/AddForm';
import { EditForm } from './_comp/EditForm';
import { MapboxInstance } from './_comp/MapboxInstance';
import { MapDataProvider } from './map-context';

const { Title } = Typography;

const Map = () => {
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
        <Breadcrumb.Item>管网方案详情</Breadcrumb.Item>
      </Breadcrumb>

      <MapDataProvider
        drawInstance={null}
        initialNodedata={null}
      >
        <Row gutter={24}>
          <Col span={14}>
            <Card>
              <MapboxInstance />
              <EditForm />
              <AddForm />
            </Card>
          </Col>

          <Col span={10}>
            <Card>
              <Title heading={6}>node 数据</Title>

              <div className="mt-6">{/* <MapDataTable /> */}</div>
            </Card>
          </Col>
        </Row>
      </MapDataProvider>
    </>
  );
};

export default Map;
