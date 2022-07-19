import '../../index.scss';

import { Layout } from '@douyinfe/semi-ui';
import React, { FC } from 'react';

const { Footer } = Layout;

const Index: FC = () => {
  return (
    <Footer className="layout-footer flex">
      <div>Copyright ©2022 武汉规划设计有限公司. All Rights Reserved. </div>

      <div className="ml-16">
        <a
          href="http://www.wpdc2012.com"
          target="_blank"
        >
          <span style={{ marginRight: '24px' }}>关于我们</span>
        </a>
        <span>反馈建议</span>
      </div>
    </Footer>
  );
};

export default Index;
