import React from "react";
import { ReactNode } from "react";
import { IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';

export type MenuItem = {
  itemKey: string;
  text: string;
  icon: ReactNode
  items?: MenuItem[]
}

export const menuItems: MenuItem[] = [
  // { itemKey: 'Home', text: '首页', icon: <IconHome size="large" /> },
  // { itemKey: 'Live', text: '测试功能', icon: <IconLive size="large" /> },
  // { itemKey: 'Setting', text: '设置', icon: <IconSetting size="large" /> },
  { itemKey: 'ModelManage', text: '模型编排管理', icon: <IconHistogram size="large" />, items: [
    { itemKey: 'MyProject', text: '我的项目', icon: <IconHome size="large" /> },
    { itemKey: 'MyMonitor', text: '我的模拟', icon: <IconLive size="large" /> }
  ]},
]