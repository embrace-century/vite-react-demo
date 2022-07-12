import '@/styles/tailwind.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MapLayout, NavLayout } from '@/layouts';
import NotFound from '@/pages/NotFound';

/**
 * 应该根据配置文件去配置，而不是写死
 */
export const App = () => {
  return (
    <Routes>
      <Route
        element={<NavLayout />}
        path="/"
      >
        {/* Todo: 嵌套路由放这里 */}
      </Route>
      <Route
        element={<MapLayout />}
        path="/map"
      />
      <Route
        element={<NotFound />}
        path="*"
      />
    </Routes>
  );
};
