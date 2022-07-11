import { Layout } from '@douyinfe/semi-ui';
import React from 'react';

import { Container, HeaderNav, SideMenu } from '@/components/layouts';

const Home = () => {
  return (
    <Layout style={{ border: '1px solid #ccc' }}>
      <HeaderNav />
      <Layout>
        <SideMenu />
        <Container />
      </Layout>
    </Layout>
  );
};

export default Home;
