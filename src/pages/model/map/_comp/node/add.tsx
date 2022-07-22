import { Button, Toast } from '@douyinfe/semi-ui';
import React, { useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router';

import { IPoint } from '@/pages/model/map/interface';
import { useAppDispatch } from '@/stores';
import { setCancleCreate } from '@/stores/draw-slice';
import { setSideSheetVisible } from '@/stores/global-slice';

import { DrawSideSheet } from '../draw-side-sheet';
import New from './new';
import NodeService from './service';

const Add = () => {
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const api = useRef<any>();
  const { networkId } = useParams();
  // 新建点
  const { mutateAsync } = useMutation(NodeService.create, {
    onSuccess: (status) => {
      queryClient.invalidateQueries(['node.index']);
      dispatch(setSideSheetVisible(false));
      Toast.success('新建成功');
    },
    onError: () => {
      Toast.error('新建失败');
    },
  });

  // 同步点
  const { mutate: syncNodeMutate } = useMutation(NodeService.sync, {
    onSuccess: (status) => {
      Toast.success('同步成功');
    },
    onError: () => {
      Toast.error('同步失败');
    },
  });

  const handleForm = () => {
    api.current.validate().then((values: IPoint) => {
      const requestData: IPoint = { ...values, scenario_id: Number(networkId!) };
      mutateAsync(requestData).then((response) => {
        const { id } = response;
        syncNodeMutate({ id: id! });
      });
    });
  };

  const handleClose = () => {
    console.log('🚀 ~ file: add.tsx ~ line 57 ~ handleClose ~ handleClose');
    dispatch(setSideSheetVisible(false));
    dispatch(setCancleCreate(true));
  };

  const footer = (
    <div className="flex justify-between">
      <Button
        className="mr-4"
        theme="solid"
        type="tertiary"
        onClick={handleClose}
      >
        关闭
      </Button>
      <Button
        theme="solid"
        onClick={handleForm}
      >
        新建
      </Button>
    </div>
  );
  return (
    <DrawSideSheet
      footer={footer}
      title="新建 Node"
    >
      <New getFormApi={(formApi: any) => (api.current = formApi)} />
    </DrawSideSheet>
  );
};

export default Add;
