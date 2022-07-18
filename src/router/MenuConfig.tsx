import { IconHistogram } from '@douyinfe/semi-icons';
import React from 'react';

export type IMenuItem = {
  itemKey: string;
  text: string;
  icon?: React.ReactNode;
  path?: string;
  items?: IMenuItem[];
  component?: React.ComponentType<any>;
};

const MENU_CONFIG: IMenuItem[] = [
  {
    itemKey: '1',
    text: '模型编排管理',
    icon: <IconHistogram />,
    items: [
      {
        itemKey: '1-1',
        text: '我的项目',
        path: '/project',
      },
      {
        itemKey: '1-2',
        text: '我的模拟',
        path: '/mock',
      },
    ],
  },
];

export default MENU_CONFIG;
