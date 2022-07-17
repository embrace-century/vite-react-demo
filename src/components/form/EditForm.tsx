import { Button, SideSheet, Typography } from '@douyinfe/semi-ui';
import React, { useCallback, useState } from 'react';

import { updatePoint } from '@/api/draw';
import { PointType } from '@/configs/draw-config';
import { useAppDispatch, useAppSelector } from '@/stores';
import { globalSelector, setSideSheetVisible } from '@/stores/global-slice';

import { DrawForm } from './_compo/DrawForm';

export const EditForm = () => {
  const dispatch = useAppDispatch();
  const { sideSheetVisible } = useAppSelector(globalSelector);

  const [formApi, setFormApi] = useState<any>();

  const getFormApi = (formApi: any) => {
    setFormApi(formApi);
  };

  const handleSubmitClick = useCallback(() => {
    if (formApi) {
      formApi
        .validate()
        .then((values: PointType) => {
          updatePoint(values);
          // Todo: 这里要执行同步操作
        })
        .catch((errors: any) => {
          console.log('🚀 ~ file: AddForm.tsx ~ line 26 ~ formApi.validate ~ errors', errors);
        });
    }
  }, []);

  const footer = (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button style={{ marginRight: 8 }}>关闭</Button>
      <Button
        theme="solid"
        onClick={handleSubmitClick}
      >
        提交
      </Button>
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
      <DrawForm getFormApi={getFormApi} />
    </SideSheet>
  );
};
