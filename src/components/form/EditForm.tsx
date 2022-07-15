import { Banner, Button, Form, SideSheet, Typography } from '@douyinfe/semi-ui';
import React from 'react';

import { useAppDispatch, useAppSelector } from '@/stores';
import { globalSelector, setSideSheetVisible } from '@/stores/global-slice';

import { DrawForm } from './_compo/DrawForm';

export const EditForm = () => {
  const { DatePicker, Select, Radio, RadioGroup } = Form;
  const dispatch = useAppDispatch();
  const { sideSheetVisible } = useAppSelector(globalSelector);

  const footer = (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button style={{ marginRight: 8 }}>关闭</Button>
      <Button theme="solid">提交</Button>
    </div>
  );
  return (
    <SideSheet
      bodyStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
      footer={footer}
      headerStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
      mask={false}
      title={<Typography.Title heading={4}>地理信息</Typography.Title>}
      visible={sideSheetVisible}
      onCancel={() => dispatch(setSideSheetVisible(false))}
    >
      <DrawForm />
    </SideSheet>
  );
};
