import React, { FC, Suspense } from 'react';
import { RouteProps } from 'react-router';

import SuspendFallbackLoading from '@/components/fallback-loading';

import PrivateRoute from './PrivateRoute';

export type WrapperRouteProps = {
  /** document title id */
  titleId: string;
  /** authorization？ */
  auth?: boolean;
} & RouteProps;

const PublicRoute = (props: any) => {
  return props.element;
};

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, auth, ...props }) => {
  const WitchRoute = auth ? PrivateRoute : PublicRoute;
  if (titleId) {
    document.title = titleId;
  }
  return <WitchRoute {...props} />;
};

const WrapperRouteWithOutLayoutComponent: FC<WrapperRouteProps> = ({ titleId, auth, ...props }) => {
  if (titleId) {
    document.title = titleId;
  }

  return <Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>{props.element}</Suspense>;
};

export { WrapperRouteComponent, WrapperRouteWithOutLayoutComponent };
