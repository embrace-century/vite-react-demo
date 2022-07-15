import { IconHistogram } from '@douyinfe/semi-icons';
import React, { ReactNode } from 'react';

export type MenuItem = {
  itemKey: string;
  text: string;
  icon: ReactNode;
  items?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    itemKey: 'model',
    text: '模型编排管理',
    icon: <IconHistogram size="large" />,
    items: [
      { itemKey: 'project', text: '我的项目', icon: null },
      { itemKey: 'mock', text: '我的模拟', icon: null },
    ],
  },
];

export default menuItems;
