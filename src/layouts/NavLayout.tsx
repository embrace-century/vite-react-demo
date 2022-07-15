import { Layout } from '@douyinfe/semi-ui';
import React from 'react';

import { Container, HeaderNav } from '@/components/layouts';

import Sider from './_comps/sider';

export const NavLayout = () => {
  return (
    <Layout style={{ border: '1px solid #ccc' }}>
      <Sider />
      <Layout>
        <HeaderNav />
        <Container />
      </Layout>
    </Layout>
  );
};
