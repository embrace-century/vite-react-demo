import { IconBell, IconHelpCircle, IconSemiLogo } from '@douyinfe/semi-icons';
import { Avatar, Button, Layout, Nav } from '@douyinfe/semi-ui';
import React from 'react';

export const HeaderNav = () => {
  const { Header } = Layout;
  return (
    <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
      <div>
        <Nav
          defaultSelectedKeys={['Home']}
          mode="horizontal"
        >
          <Nav.Header>
            <IconSemiLogo style={{ width: '96px', height: '36px', fontSize: 36 }} />
          </Nav.Header>
          <span
            style={{
              color: 'var(--semi-color-text-2)',
            }}
          >
            <span
              style={{
                marginRight: '24px',
                color: 'var(--semi-color-text-0)',
                fontWeight: '600',
              }}
            >
              模版推荐
            </span>
            <span style={{ marginRight: '24px' }}>所有模版</span>
            <span>我的模版</span>
          </span>
          <Nav.Footer>
            <Button
              icon={<IconBell size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
              theme="borderless"
            />
            <Button
              icon={<IconHelpCircle size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
              theme="borderless"
            />
            <Avatar
              color="orange"
              size="small"
            >
              YJ
            </Avatar>
          </Nav.Footer>
        </Nav>
      </div>
    </Header>
  );
};
