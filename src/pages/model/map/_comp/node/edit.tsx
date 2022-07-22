import { Button, Popconfirm, Toast } from '@douyinfe/semi-ui';
import React, { useEffect, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { IPoint } from '@/pages/model/map/interface';
import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector } from '@/stores/draw-slice';
import { setSideSheetVisible } from '@/stores/global-slice';

import { DrawSideSheet } from '../draw-side-sheet';
import Form from './form';
import NodeService from './service';

const Edit = () => {
  const dispatch = useAppDispatch();
  const api = useRef<any>();

  const { nodeId } = useAppSelector(drawSelector);

  const queryClient = useQueryClient();
  // 把uesEffect当做Mounted生命周期用
  useEffect(() => {
    dispatch(setSideSheetVisible(false));
  }, [dispatch]);

  // 更新点
  const { mutate } = useMutation(NodeService.update, {
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
  const { mutate: deleteMutate } = useMutation(NodeService.remove, {
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
    deleteMutate({ id: nodeId! });
  };

  const handleForm = () => {
    api.current.validate().then((values: IPoint) => {
      console.log('🚀 ~ file: edit.tsx ~ line 56 ~ api.current.validate ~ values', values);
      mutate(values);
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
  // return (
  //   <SideSheet
  //     bodyStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
  //     footer={footer}
  //     getPopupContainer={getContainer}
  //     headerStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
  //     mask={false}
  //     placement="left"
  //     title={<Typography.Title heading={4}>编辑 Node</Typography.Title>}
  //     visible={sideSheetVisible}
  //     onCancel={() => dispatch(setSideSheetVisible(false))}
  //   >
  //     <Form getFormApi={(formApi: any) => (api.current = formApi)} />
  //   </SideSheet>
  // );
  return (
    <DrawSideSheet
      footer={footer}
      title="编辑 Node"
    >
      <Form getFormApi={(formApi: any) => (api.current = formApi)} />
    </DrawSideSheet>
  );
};

export default Edit;
