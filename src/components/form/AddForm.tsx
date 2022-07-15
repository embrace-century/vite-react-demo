import { Modal } from '@douyinfe/semi-ui';
import React, { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector, setModalOpen } from '@/stores/draw-slice';

import { DrawForm } from './_compo/DrawForm';

export const AddForm = () => {
  const dispatch = useAppDispatch();
  const { modalIsOpen } = useAppSelector(drawSelector);

  const closeModal = useCallback(() => {
    dispatch(setModalOpen(false));
  }, []);
  return (
    <Modal
      closeOnEsc={true}
      style={{ width: '40rem' }}
      title="地理信息"
      visible={modalIsOpen}
      onCancel={closeModal}
      onOk={closeModal}
    >
      <DrawForm />
    </Modal>
  );
};
