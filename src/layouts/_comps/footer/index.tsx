import { Layout } from '@douyinfe/semi-ui';
import React, { FC } from 'react';

const { Footer } = Layout;

const Index: FC = () => {
  return (
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
        <span>Copyright ©2022 武汉规划设计有限公司. All Rights Reserved. </span>
      </span>
      <span>
        <a
          href="http://www.wpdc2012.com"
          target="_blank"
        >
          <span style={{ marginRight: '24px' }}>关于我们</span>
        </a>
        <span>反馈建议</span>
      </span>
    </Footer>
  );
};

export default Index;
