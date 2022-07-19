import '../index.scss';

import { Button, Card, Descriptions, Space, Tag, Toast } from '@douyinfe/semi-ui';
import React, { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import { IProject } from '../interface';
import { ProjectService } from '../service';

type IProps = {
  item: IProject;
};

const CardBlock: FC<IProps> = (props) => {
  const {
    item: { id, name, synced },
  } = props;

  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(ProjectService.sync, {
    onSuccess: (data) => {
      if (data.synced) {
        Toast.success('同步成功');
      } else {
        Toast.error('同步失败');
      }
      queryClient.invalidateQueries(['project.index']);
    },
  });

  const getStatus = () => {
    if (synced) {
      return (
        <Tag
          className="status"
          color="green"
          size="small"
        >
          已同步
        </Tag>
      );
    } else {
      return (
        <Tag
          className="status"
          color="red"
          size="small"
        >
          未同步
        </Tag>
      );
    }
  };

  const getContent = () => {
    // if (loading) {
    //   return <Skeleton active />;
    // }
    return <Descriptions data={[{ key: '名称', value: name }]} />;
  };

  const getButtonGroup = () => {
    return (
      <Space>
        <Button
          theme="solid"
          type="danger"
        >
          删除
        </Button>

        <Button
          loading={isLoading}
          theme="light"
          type="primary"
          onClick={() => {
            mutate({ id });
          }}
        >
          同步
        </Button>

        <Link to={String(id)}>
          <Button
            theme="solid"
            type="primary"
          >
            查看
          </Button>
        </Link>
      </Space>
    );
  };

  return (
    <Card
      className="card-block"
      header={
        <div className="title">
          {`# ${id}`}
          {getStatus()}
        </div>
      }
      shadows="hover"
    >
      <div className="content">{getContent()}</div>
      <div className="extra">{getButtonGroup()}</div>
    </Card>
  );
};

export default CardBlock;
