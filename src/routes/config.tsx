import React from 'react';

import { MapLayout, NavLayout } from '@/layouts';
import NotFound from '@/pages/NotFound';

export type IRouteConfig = {
  // 路由路径
  path: string;
  // 路由组件
  element?: any;
  // 302 跳转
  redirect?: string;
  exact?: boolean;
  // 路由信息
  title: string;
  icon?: string;
  // 是否校验权限, false 为不校验, 不存在该属性或者为true 为校验, 子路由会继承父路由的 auth 属性
  auth?: boolean;
  children?: IRouteConfig[];
};

const routes: IRouteConfig[] = [
  {
    path: '/',
    title: 'NavLayout',
    element: NavLayout,
    // exact: true,
    children: [
      {
        path: 'child',
        title: '子路由',
        element: NotFound,
      },
    ],
  },
  {
    path: '/map',
    title: 'mapLayout',
    element: MapLayout,
    // exact: true,
    children: [],
  },
  {
    path: '/noFond',
    title: '页面不存在',
    element: React.lazy(() => import('@/pages/NotFound')),
  },
];

export default routes;
