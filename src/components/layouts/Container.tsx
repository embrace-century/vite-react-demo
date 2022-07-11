import { Breadcrumb, Layout } from '@douyinfe/semi-ui';
import React, { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

export const Container = ({ children }: PropsWithChildren) => {
  const { Content } = Layout;
  return (
    <Content
      style={{
        padding: '24px',
        backgroundColor: 'var(--semi-color-bg-0)',
      }}
    >
      <Breadcrumb
        routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
        style={{
          marginBottom: '24px',
        }}
      />
      <div
        style={{
          borderRadius: '10px',
          border: '1px solid #ccc',
          height: '376px',
          padding: '32px',
        }}
      >
        <Outlet />
      </div>
    </Content>
  );
};
