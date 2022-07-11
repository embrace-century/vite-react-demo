// src/routes/index.tsx
import React, { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import routes from './config';

// 路由装饰器
const RouteDecorator = (props: { route: any }) => {
  const { route } = props;
  const navigate = useNavigate();

  useEffect(() => {
    // 自定义路由守卫
    route.beforeCreate?.(route);
    return () => route.beforeDestroy?.(route);
  }, [route]);

  return <route.component />;
};

const RouterComponent: FC = () => (
  <Routes>
    <Route
      element={<Navigate to="/index" />}
      path="/"
    />
    {routes.map((route) => (
      <Route
        key={route.path}
        element={<RouteDecorator route={route} />}
        path={route.path}
      />
    ))}
  </Routes>
);

export default RouterComponent;
