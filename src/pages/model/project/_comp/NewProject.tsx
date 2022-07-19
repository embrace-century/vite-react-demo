import { Form, Modal, Toast } from '@douyinfe/semi-ui';
import React, { FC, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { IProject } from '../interface';
import { ProjectService } from '../service';

type IProps = {
  visible: boolean;
  onClose: Function;
};

const NewProject: FC<IProps> = (props) => {
  const { visible, onClose: closeCB } = props;
  const api = useRef<any>();

  let message = '该项为必填项';

  const queryClient = useQueryClient();
  const { mutate } = useMutation(ProjectService.create, {
    onSuccess: () => {
      queryClient.invalidateQueries(['project.index']);
      // 关闭modal框
      closeCB();
      Toast.success('新建成功');
    },
    onError: () => {
      Toast.error('新建失败');
    },
  });

  const handleForm = () => {
    api.current.validate().then((values: Pick<IProject, 'name'>) => {
      mutate(values);
    });
  };

  return (
    <Modal
      closeOnEsc={true}
      maskClosable={false}
      title="新建项目"
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

export default NewProject;
