import '../../index.scss';

import { IconBell } from '@douyinfe/semi-icons';
import { Avatar, Badge, Button, Dropdown, Layout, Nav, Radio, RadioGroup } from '@douyinfe/semi-ui';
import React, { FC } from 'react';

const { Header } = Layout;

const Index: FC = () => {
  return (
    <Header className="layout-header">
      <Nav mode="horizontal">
        <Nav.Header>
          <div className="flex items-center">
            <img
              height="36"
              src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg"
              width="36"
            />
            <span className="ml-4 font-bold text-black">水务管理平台</span>
          </div>
        </Nav.Header>

        <Nav.Footer>
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
        </Nav.Footer>
      </Nav>
    </Header>
  );
};

export default Index;
