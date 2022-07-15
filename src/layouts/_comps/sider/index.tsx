import { Layout, Nav } from '@douyinfe/semi-ui';
import React, { FC } from 'react';

import menuItems from './data';

const Sider: FC = () => {
  const { Sider } = Layout;

  return (
    <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        defaultOpenKeys={['model']}
        defaultSelectedKeys={['my-project']}
        footer={{
          collapseButton: true,
        }}
        header={{
          logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
          text: '水务管理平台',
        }}
        items={menuItems}
        style={{ maxWidth: 220, height: '100%' }}
      />
    </Sider>
  );
};

export default Sider;
