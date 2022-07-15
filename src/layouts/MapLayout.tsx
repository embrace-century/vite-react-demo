import { Layout } from '@douyinfe/semi-ui';
import { motion } from 'framer-motion';
import React from 'react';

import { EditForm } from '@/components/form/EditForm';
import { HeaderNav, SideMenu } from '@/components/layouts';
import { MapboxInstance } from '@/components/mapbox/MapboxInstance';

/**
 * 地图页面布局结构：
 * 1 头部工具栏（宽度：100%）
 * 2 左侧菜单栏
 * 3 中间地图区域
 * 4 右侧表格展示
 */

export const MapLayout = () => {
  const { Content } = Layout;

  return (
    <Layout style={{ border: '1px solid #ccc' }}>
      <HeaderNav />
      <Layout>
        <SideMenu />
        <motion.div>
          <Content>
            <MapboxInstance />
            <EditForm />
          </Content>
        </motion.div>
      </Layout>
    </Layout>
  );
};
