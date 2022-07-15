import React, { FC } from 'react';
import { RouteProps, useLocation } from 'react-router';
import { Navigate } from 'react-router-dom';

import Empty from '@/components/empty';
// import useStore from '@src/stores/user'

const PrivateRoute: FC<RouteProps> = (props) => {
  const location = useLocation();
  const { pathname } = location;
  // const logged = useStore((state) => state.logged)
  const logged = true; // 这里做登录验证

  return logged ? (
    pathname === '/' ? (
      <Navigate
        replace
        to={{ pathname: `/project` }}
      />
    ) : (
      props.element
    )
  ) : (
    <Empty
      description="您还没有登录，请先去登录"
      title="没有权限"
      type="403"
    />
  );
};

export default PrivateRoute;
