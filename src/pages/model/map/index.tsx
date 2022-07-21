import { Breadcrumb, Card, Col, Row, Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { Link } from 'react-router-dom';

import { MapboxInstance } from './_comp/MapboxInstance';
import { MapDataTable } from './_comp/MapDataTable';

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

      <Row gutter={24}>
        <Col
          className="map-card"
          span={14}
        >
          <Card>
            <MapboxInstance />
          </Card>
        </Col>

        <Col span={10}>
          <Card>
            <Title heading={6}>Node 列表</Title>

            <div className="mt-6">
              <MapDataTable />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Map;
