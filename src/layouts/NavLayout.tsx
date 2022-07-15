import { Layout } from '@douyinfe/semi-ui';
import React, { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SuspendFallbackLoading from '@/components/fallback-loading';
import { HeaderNav } from '@/components/layouts';

import Sider from './_comps/sider';

const { Content } = Layout;

export const NavLayout: FC = () => {
  return (
    <Layout style={{ border: '1px solid #ccc' }}>
      <Sider />
      <Layout>
        <HeaderNav />

        <Content>
          <Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};
