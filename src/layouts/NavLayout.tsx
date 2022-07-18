import './index.scss';

import { Layout, Skeleton } from '@douyinfe/semi-ui';
import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SuspendFallbackLoading from '@/components/fallback-loading';
import { HeaderNav } from '@/components/layouts';

import Footer from './_comps/footer';
import Header from './_comps/header';
import Sider from './_comps/sider';

const { Content } = Layout;

export const NavLayout: FC = () => {
  return (
    <Layout className="layout-page">
      <Sider />
      <Layout>
        <Header />

        <Content className="layout-content">
          <Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
