import { Card, Col, Typography } from '@douyinfe/semi-ui';
import React from 'react';

const Index: React.FC = () => {
  const { Text } = Typography;

  return (
    <Col
      className="col-content"
      span={6}
    >
      <Card
        headerExtraContent={<Text link>更多</Text>}
        style={{ maxWidth: 360 }}
        title="Semi Design"
      >
        Semi Design 是由互娱社区前端团队与 UED
        团队共同设计开发并维护的设计系统。设计系统包含设计语言以及一整套可复用的前端组件，帮助设计师与开发者更容易地打造高质量的、用户体验一致的、符合设计规范的
        Web 应用。
      </Card>
    </Col>
  );
};

export default Index;
