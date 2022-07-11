import './styles/App.css';

import { Layout } from '@douyinfe/semi-ui';
import React from 'react';

import { Container, HeaderNav, SideMenu } from '@/components/layouts';

export const App = () => {
  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
      <HeaderNav />
      <Layout>
        <SideMenu />
        <Container />
      </Layout>
    </Layout>
  );
};