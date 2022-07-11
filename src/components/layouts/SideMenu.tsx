import { Layout, Nav } from '@douyinfe/semi-ui';
import React from 'react';

import { useAppDispatch, useAppSelector } from '@/stores';
import { menuSelector } from '@/stores/side-menu-slice';

export const SideMenu = () => {
  const dispatch = useAppDispatch();
  const { menuItem } = useAppSelector(menuSelector);
  const { Sider } = Layout;
  return (
    <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        defaultSelectedKeys={['Home']}
        footer={{
          collapseButton: true,
        }}
        items={menuItem}
        style={{ maxWidth: 220, height: '100%' }}
      />
    </Sider>
  );
};
