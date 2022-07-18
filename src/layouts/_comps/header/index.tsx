import '../../index.scss';

import { IconBell, IconHelpCircle } from '@douyinfe/semi-icons';
import { Avatar, Badge, Button, Dropdown, Layout, Nav, Radio, RadioGroup } from '@douyinfe/semi-ui';
import React, { FC } from 'react';

import Breadcrumb from '../breadcrumb';

const { Header } = Layout;

const Index: FC = () => {
  return (
    <Header className="layout-header">
      <Nav
        footer={
          <>
            <Badge
              count={5}
              type="danger"
            >
              <Button
                icon={<IconBell />}
                style={{
                  color: 'var(--semi-color-text-2)',
                  marginRight: '12px',
                }}
                theme="borderless"
              />
            </Badge>

            <Dropdown
              render={
                <Dropdown.Menu>
                  <Dropdown.Item>个人中心</Dropdown.Item>
                  <Dropdown.Item>个人设置</Dropdown.Item>
                  <Dropdown.Item>退出登录</Dropdown.Item>
                </Dropdown.Menu>
              }
            >
              <Avatar
                color="orange"
                size="small"
              >
                wpdc
              </Avatar>
            </Dropdown>

            <RadioGroup
              defaultValue="zh_CN"
              style={{ marginLeft: '20px' }}
              type="button"
            >
              <Radio value="zh_CN">中文</Radio>
              <Radio value="en_GB">EN</Radio>
            </RadioGroup>
          </>
        }
        header={<Breadcrumb />}
        mode="horizontal"
      />
    </Header>
  );
};

export default Index;
