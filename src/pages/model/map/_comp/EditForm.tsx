import { Button, Popconfirm, SideSheet, Typography } from '@douyinfe/semi-ui';
import React, { useCallback, useEffect, useState } from 'react';

import { DrawForm } from '@/components/form';
import { IPoint } from '@/pages/model/map/interface';
import { PointService } from '@/pages/model/map/service';
import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector } from '@/stores/draw-slice';
import { globalSelector, setSideSheetVisible } from '@/stores/global-slice';

export const EditForm = () => {
  const dispatch = useAppDispatch();
  const { sideSheetVisible } = useAppSelector(globalSelector);
  const { features } = useAppSelector(drawSelector);

  const [formApi, setFormApi] = useState<any>();

  const getFormApi = (formApi: any) => {
    setFormApi(formApi);
  };

  // 把uesEffect当做Mounted生命周期用
  useEffect(() => {
    dispatch(setSideSheetVisible(false));
  }, [dispatch]);

  const handleDelete = useCallback(() => {
    const { id, properties } = features!;
    // 如果先删再查的话，就不需要draw的实例了
    PointService.deletePoint(features!.id!, properties['class_name']).then(() => {
      dispatch(setSideSheetVisible(false));
    });
  }, []);

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
    <div className="flex justify-between">
      <Popconfirm
        cancelText="否"
        content="此修改将不可逆"
        okText="是"
        position="top"
        title="确认删除吗？"
        onConfirm={handleDelete}
      >
        <Button
          className="float-right	"
          theme="solid"
          type="danger"
        >
          删除
        </Button>
      </Popconfirm>
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
