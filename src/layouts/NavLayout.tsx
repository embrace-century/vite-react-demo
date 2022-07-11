import { Layout } from '@douyinfe/semi-ui';
import React from 'react';

import { Container, HeaderNav, SideMenu } from '@/components/layouts';

export const NavLayout = () => {
  return (
    <Layout style={{ border: '1px solid #ccc' }}>
      <SideMenu />
      <Layout>
        <HeaderNav />
        <Container />
      </Layout>
    </Layout>
  );
};
