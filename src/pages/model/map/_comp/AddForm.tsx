import { Modal, Toast } from '@douyinfe/semi-ui';
import React, { useCallback, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { DrawForm } from '@/components/form';
import { IPoint } from '@/pages/model/map/interface';
import { PointService } from '@/pages/model/map/service';
import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector, setCancleCreate, setModalOpen } from '@/stores/draw-slice';

export const AddForm = () => {
  const dispatch = useAppDispatch();
  const { modalIsOpen } = useAppSelector(drawSelector);

  const [formApi, setFormApi] = useState<any>();

  const queryClient = useQueryClient();

  const getFormApi = (formApi: any) => {
    setFormApi(formApi);
  };

  // 新建请求
  const { mutate } = useMutation(PointService.createPoint, {
    onSuccess: (status) => {
      queryClient.invalidateQueries(['node.index']);
      dispatch(setModalOpen(false));
      Toast.success('创建成功');
    },
    onError: () => {
      Toast.error('创建失败');
    },
  });

  const closeModal = useCallback(() => {
    dispatch(setCancleCreate(true));
    dispatch(setModalOpen(false));
  }, [dispatch]);

  const handleForm = () => {
    formApi.validate().then((values: IPoint) => {
      mutate({ createData: values });
    });
  };

  return (
    <Modal
      closeOnEsc={true}
      style={{ width: '40rem' }}
      title="地理信息"
      visible={modalIsOpen}
      onCancel={closeModal}
      onOk={handleForm}
    >
      <DrawForm getFormApi={getFormApi} />
    </Modal>
  );
};
