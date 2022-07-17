import React, { FC, lazy } from 'react';
import { RouteObject } from 'react-router';
import { Outlet, useRoutes } from 'react-router-dom';

import Empty from '@/components/empty';
import { NavLayout } from '@/layouts';

import { WrapperRouteComponent, WrapperRouteWithOutLayoutComponent } from './config';

const ProjectIndex = lazy(() => import('@/pages/model/project'));
const ProjectShow = lazy(() => import('@/pages/model/project/Show'));

const MyMock = lazy(() => import('@/pages/model/mock'));
const Map = lazy(() => import('@/pages/model/map'));

const routeList: RouteObject[] = [
  {
    path: '/',
    element: (
      <WrapperRouteComponent
        auth
        element={<NavLayout />}
        titleId=""
      />
    ),
    children: [
      {
        path: '/project',
        children: [
          {
            index: true,
            element: (
              <WrapperRouteComponent
                auth
                element={<ProjectIndex />}
                titleId="我的项目"
              />
            ),
          },
          {
            path: ':projectId',
            index: false,
            element: (
              <WrapperRouteComponent
                auth
                element={<ProjectShow />}
                titleId="我的项目"
              />
            ),
          },
        ],
      },
      {
        path: '/mock',
        element: (
          <WrapperRouteComponent
            auth
            element={<MyMock />}
            titleId="我的模拟"
          />
        ),
      },
      {
        path: '/map',
        element: (
          <WrapperRouteComponent
            auth
            element={<Map />}
            titleId="地图"
          />
        ),
      },
    ],
  },
  // {
  //   path: 'login',
  //   element: (
  //     <WrapperRouteWithOutLayoutComponent
  //       element={<LoginPage />}
  //       titleId="登录"
  //     />
  //   ),
  // },
  {
    path: '*',
    element: (
      <WrapperRouteWithOutLayoutComponent
        element={
          <Empty
            description="这里什么也没有~"
            title="找不到咯"
            type="404"
          />
        }
        titleId="404"
      />
    ),
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
