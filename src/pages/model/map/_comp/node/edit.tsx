import { Button, Popconfirm, SideSheet, Toast, Typography } from '@douyinfe/semi-ui';
import React, { useEffect, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { IPoint } from '@/pages/model/map/interface';
import { PointService } from '@/pages/model/map/service';
import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector } from '@/stores/draw-slice';
import { globalSelector, setSideSheetVisible } from '@/stores/global-slice';

import Form from './form';

const Edit = () => {
  const dispatch = useAppDispatch();
  const api = useRef<any>();

  const { sideSheetVisible } = useAppSelector(globalSelector);
  const { features } = useAppSelector(drawSelector);

  const queryClient = useQueryClient();
  // 把uesEffect当做Mounted生命周期用
  useEffect(() => {
    dispatch(setSideSheetVisible(false));
  }, [dispatch]);

  // 更新点
  const { mutate } = useMutation(PointService.updatePoint, {
    onSuccess: (status) => {
      queryClient.invalidateQueries(['node.index']);
      dispatch(setSideSheetVisible(false));
      Toast.success('更新成功');
    },
    onError: () => {
      Toast.error('更新失败');
    },
  });

  // 删除点
  const { mutate: deleteMutate } = useMutation(PointService.deletePoint, {
    onSuccess: (status) => {
      queryClient.invalidateQueries(['node.index']);
      dispatch(setSideSheetVisible(false));
      Toast.success('删除成功');
    },
    onError: () => {
      Toast.error('删除失败');
    },
  });

  const handleDelete = () => {
    const { id, properties } = features!;
    deleteMutate({ pointId: id!, classNme: properties['class_name'] });
  };

  const handleForm = () => {
    const { id } = features!;
    api.current.validate().then((values: IPoint) => {
      mutate({ pointId: id!, updateData: values });
    });
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
          className="mr-4"
          theme="solid"
          type="tertiary"
          onClick={() => dispatch(setSideSheetVisible(false))}
        >
          关闭
        </Button>
        <Button
          theme="solid"
          onClick={handleForm}
        >
          更新
        </Button>
      </div>
    </div>
  );
  return (
    <SideSheet
      bodyStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
      footer={footer}
      headerStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
      mask={true}
      title={<Typography.Title heading={4}>编辑 Node</Typography.Title>}
      visible={sideSheetVisible}
      onCancel={() => dispatch(setSideSheetVisible(false))}
    >
      <Form getFormApi={(formApi: any) => (api.current = formApi)} />
    </SideSheet>
  );
};

export default Edit;
