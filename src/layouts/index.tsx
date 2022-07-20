import './index.scss';

import { Layout } from '@douyinfe/semi-ui';
import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SuspendFallbackLoading from '@/components/fallback-loading';

import Footer from './_comps/footer';
import Header from './_comps/header';
import Sider from './_comps/sider';

const { Content } = Layout;

const AppLayout: FC = () => {
  return (
    <Layout className="layout-page">
      <Header />

      <Layout>
        <Sider />

        <Layout className="layout-bg">
          <Content className="layout-content">
            <Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>
              <Outlet />
            </Suspense>
          </Content>

          <Footer />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
