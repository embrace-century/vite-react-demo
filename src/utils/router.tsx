import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { IRouteConfig } from '@/routes/config';

export const renderRoutes = (routerConfig: IRouteConfig[]): React.ReactNode[] => {
  if (!routerConfig.length) {
    return [];
  }
  const result = routerConfig.map((route: IRouteConfig) => {
    const { path, element: Element, children } = route;
    if (!children || children.length === 0) {
      return (
        <Route
          element={Element}
          path={path}
        />
      );
    }
    return (
      <Route
        key={path}
        element={Element}
        path={path}
      >
        {renderRoutes(children)}
      </Route>
    );
  });
  return result;
};
