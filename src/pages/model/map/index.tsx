import { Card, Col, Row, Typography } from '@douyinfe/semi-ui';
import React from 'react';

import { AddForm } from './_comp/AddForm';
import { EditForm } from './_comp/EditForm';
import { MapboxInstance } from './_comp/MapboxInstance';

const { Title } = Typography;

const Map = () => (
  <Row gutter={24}>
    <Col span={16}>
      <Card>
        <Title heading={6}>我的项目</Title>

        <div className="mt-6">
          <MapboxInstance />
          <EditForm />
          <AddForm />
        </div>
      </Card>
    </Col>

    <Col span={8}>
      <Card>这是表格</Card>
    </Col>
  </Row>
);

export default Map;
