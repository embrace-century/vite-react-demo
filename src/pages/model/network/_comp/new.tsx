import { Form, Modal, Toast } from '@douyinfe/semi-ui';
import React, { FC, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router';

import { INetwork } from '../interface';
import NetworkService from '../service';

type IProps = {
  visible: boolean;
  onClose: Function;
};

const New: FC<IProps> = (props) => {
  const { visible, onClose: closeCB } = props;
  const api = useRef<any>();

  const { projectId } = useParams();

  let message = '该项为必填项';

  const queryClient = useQueryClient();

  // 同步创建网络
  const { mutate: syncNetWorkMutate } = useMutation(NetworkService.sync, {
    onSuccess: (status) => {
      Toast.success('同步成功');
    },
    onError: () => {
      Toast.error('同步失败');
    },
  });

  const { mutateAsync } = useMutation(NetworkService.create, {
    onSuccess: (status) => {
      queryClient.invalidateQueries(['network.index']);
      // 关闭modal框
      closeCB();
      Toast.success('新建成功');
    },
    onError: () => {
      Toast.error('新建失败');
    },
  });

  const handleForm = () => {
    api.current.validate().then((values: Pick<INetwork, 'name'>) => {
      mutateAsync({ projectId: projectId!, ...values }).then((responseValue) => {
        const { id } = responseValue;
        syncNetWorkMutate({ id });
      });
    });
  };

  return (
    <Modal
      closeOnEsc={true}
      maskClosable={false}
      title="新建网络"
      visible={visible}
      onCancel={() => closeCB()}
      onOk={() => {
        handleForm();
      }}
    >
      <Form getFormApi={(formApi) => (api.current = formApi)}>
        <Form.Input
          field="name"
          label="名称"
          rules={[{ required: true, message }]}
          trigger="blur"
        />
      </Form>
    </Modal>
  );
};

export default New;
