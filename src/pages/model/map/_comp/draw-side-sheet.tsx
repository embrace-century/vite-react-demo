import { SideSheet, Typography } from '@douyinfe/semi-ui';
import React, { PropsWithChildren, ReactNode } from 'react';

import { useAppDispatch, useAppSelector } from '@/stores';
import { setCancleCreate } from '@/stores/draw-slice';
import { globalSelector, setSideSheetVisible } from '@/stores/global-slice';

type ISideSheet = {
  footer: ReactNode;
  title: string;
};

export const DrawSideSheet = (props: PropsWithChildren & ISideSheet) => {
  const { footer, children, title } = props;
  const dispatch = useAppDispatch();
  const { sideSheetVisible } = useAppSelector(globalSelector);

  const getContainer = (): HTMLElement => {
    return document.querySelector('#map-container')!;
  };

  const handleCancle = () => {
    dispatch(setSideSheetVisible(false));
    dispatch(setCancleCreate(true));
  };

  return (
    <SideSheet
      bodyStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
      footer={footer}
      getPopupContainer={getContainer}
      headerStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
      mask={false}
      placement="left"
      title={<Typography.Title heading={4}>{title}</Typography.Title>}
      visible={sideSheetVisible}
      onCancel={handleCancle}
    >
      {children}
    </SideSheet>
  );
};
