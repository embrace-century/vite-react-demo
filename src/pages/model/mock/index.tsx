import { Breadcrumb } from '@douyinfe/semi-ui';
import React from 'react';

const Index: React.FC = () => {
  return (
    <Breadcrumb
      className="mb-4"
      compact={false}
    >
      <Breadcrumb.Item>模型编排管理</Breadcrumb.Item>
      <Breadcrumb.Item>我的模拟</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Index;
