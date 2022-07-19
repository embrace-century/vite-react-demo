import { Button, ButtonGroup, SideSheet, Typography } from '@douyinfe/semi-ui';
import React, { useEffect, useState } from 'react';

import { DrawForm } from '@/components/form';
import { IPoint } from '@/pages/model/map/interface';
import { PointService } from '@/pages/model/map/service';
import { useAppDispatch, useAppSelector } from '@/stores';
import { globalSelector, setSideSheetVisible } from '@/stores/global-slice';

export const EditForm = () => {
  const dispatch = useAppDispatch();
  const { sideSheetVisible } = useAppSelector(globalSelector);

  const [formApi, setFormApi] = useState<any>();

  const getFormApi = (formApi: any) => {
    setFormApi(formApi);
  };

  // 把uesEffect当做Mounted生命周期用
  useEffect(() => {
    dispatch(setSideSheetVisible(false));
  }, [dispatch]);

  const handleSubmitClick = () => {
    if (formApi) {
      formApi
        .validate()
        .then((values: IPoint) => {
          PointService.updatePoint(123, values).then(() => {
            dispatch(setSideSheetVisible(false));
          });
          // Todo: 这里要执行同步操作
        })
        .catch((errors: any) => {
          console.log('🚀 ~ file: AddForm.tsx ~ line 26 ~ formApi.validate ~ errors', errors);
        });
    }
  };

  const footer = (
    // <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <div className="flex justify-between">
      <Button
        className="float-right	"
        theme="solid"
        type="danger"
        onClick={() => dispatch(setSideSheetVisible(false))}
      >
        删除
      </Button>
      <div>
        <Button
          className="pr-4"
          theme="solid"
          type="tertiary"
          onClick={() => dispatch(setSideSheetVisible(false))}
        >
          关闭
        </Button>
        <Button
          theme="solid"
          onClick={handleSubmitClick}
        >
          提交
        </Button>
      </div>
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
