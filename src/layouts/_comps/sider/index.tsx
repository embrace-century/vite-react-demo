import { Layout, Nav } from '@douyinfe/semi-ui';
import React, { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import menuItems from './data';

const { Sider } = Layout;

const Index: FC = () => {
  const navigate = useNavigate();

  const handleSelect = useCallback(
    (data: any) => {
      navigate(data.itemKey);
    },
    [navigate],
  );

  return (
    <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <Nav
        defaultOpenKeys={['model']}
        defaultSelectedKeys={['project']}
        footer={{
          collapseButton: true,
        }}
        items={menuItems}
        style={{ maxWidth: 220, height: '100%' }}
        onSelect={handleSelect}
      />
    </Sider>
  );
};

export default Index;
