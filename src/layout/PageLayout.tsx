import { IconBell, IconBytedanceLogo, IconHelpCircle } from '@douyinfe/semi-icons';
import { Avatar, Breadcrumb, Button, Layout, Nav, Skeleton } from '@douyinfe/semi-ui';
import React from 'react';
import { useSelector } from 'react-redux';

import { menuSelector } from '../stores/side-menu-slice';

/**
 * Layout布局逻辑:
 * Layout -> [Header, SideBar, Content]
 * Content -> [Nav, DisplayArea(路由展示区)]
 */

export const PageLayout = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const { menuItem } = useSelector(menuSelector);

  return (
    <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
      <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <Nav
          defaultSelectedKeys={['Home']}
          footer={{
            collapseButton: true,
          }}
          header={{
            logo: <img src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />,
            text: 'Semi 运营后台',
          }}
          items={menuItem}
          style={{ maxWidth: 220, height: '100%' }}
        />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <Nav
            footer={
              <>
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
              </>
            }
            mode="horizontal"
          />
        </Header>
        <Content
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
        >
          <Breadcrumb
            routes={['首页', '当这个页面标题很长时需要省略', '上一页', '详情页']}
            style={{
              marginBottom: '24px',
            }}
          />
          <div
            style={{
              borderRadius: '10px',
              border: '1px solid var(--semi-color-border)',
              height: '376px',
              padding: '32px',
            }}
          >
            <Skeleton
              loading={true}
              placeholder={<Skeleton.Paragraph rows={2} />}
            >
              <p>Hi, Bytedance dance dance.</p>
              <p>Hi, Bytedance dance dance.</p>
            </Skeleton>
          </div>
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconBytedanceLogo
              size="large"
              style={{ marginRight: '8px' }}
            />
            <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
          </span>
          <span>
            <span style={{ marginRight: '24px' }}>平台客服</span>
            <span>反馈建议</span>
          </span>
        </Footer>
      </Layout>
    </Layout>
  );
};
