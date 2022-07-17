import { Col, Row, Typography } from '@douyinfe/semi-ui';
import React from 'react';

import Card from './_comp/card';

const Index: React.FC = () => {
  const { Text } = Typography;

  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold text-black">我的项目</div>
      <div className="mt-8 grid">
        <Row
          justify="space-between"
          type="flex"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
      </div>
    </div>
  );
};

export default Index;
