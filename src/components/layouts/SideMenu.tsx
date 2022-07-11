import { Layout, Nav } from '@douyinfe/semi-ui';
import React from 'react';

import { useAppSelector } from '@/stores';
import { menuSelector } from '@/stores/side-menu-slice';

export const SideMenu = () => {
  const { menuItem } = useAppSelector(menuSelector);
  const { Sider } = Layout;
  return (
    <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        defaultSelectedKeys={['Home']}
        footer={{
          collapseButton: true,
        }}
        header={{
          logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
          text: '水务管理平台',
        }}
        items={menuItem}
        style={{ maxWidth: 220, height: '100%' }}
      />
    </Sider>
  );
};
