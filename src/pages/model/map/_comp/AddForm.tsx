import { Modal } from '@douyinfe/semi-ui';
import React, { useCallback, useState } from 'react';

import { DrawForm } from '@/components/form';
import { IPoint } from '@/pages/model/map/interface';
import { PointService } from '@/pages/model/map/service';
import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector, setModalOpen } from '@/stores/draw-slice';

export const AddForm = () => {
  const dispatch = useAppDispatch();
  const { modalIsOpen } = useAppSelector(drawSelector);

  const [formApi, setFormApi] = useState<any>();

  const getFormApi = (formApi: any) => {
    setFormApi(formApi);
  };

  const closeModal = useCallback(() => {
    dispatch(setModalOpen(false));
  }, [dispatch]);

  const handleOnOk = useCallback(() => {
    if (formApi) {
      formApi
        .validate()
        .then((values: IPoint) => {
          PointService.createPoint(values);
          // Todo: 这里要执行同步操作
        })
        .catch((errors: any) => {
          console.log('🚀 ~ file: AddForm.tsx ~ line 26 ~ formApi.validate ~ errors', errors);
        });
    }
  }, [formApi]);

  return (
    <Modal
      closeOnEsc={true}
      style={{ width: '40rem' }}
      title="地理信息"
      visible={modalIsOpen}
      onCancel={closeModal}
      onOk={handleOnOk}
    >
      <DrawForm getFormApi={getFormApi} />
    </Modal>
  );
};
