import '../index.scss';

import { Button, Card, Descriptions } from '@douyinfe/semi-ui';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IProject } from '../interface';

type IProps = {
  item: IProject;
};

const CardBlock: FC<IProps> = ({ item }) => {
  const getContent = () => {
    // if (loading) {
    //   return <Skeleton active />;
    // }
    return <Descriptions data={[{ key: '名称', value: item.name }]} />;
  };

  const getButtonGroup = () => {
    return (
      <>
        <Link to={String(item.id)}>
          <Button
            style={{ marginLeft: '12px' }}
            theme="solid"
            type="primary"
          >
            查看
          </Button>
        </Link>
        <Button
          theme="light"
          type="danger"
        >
          删除
        </Button>
      </>
    );
  };

  return (
    <Card
      className="card-block"
      header={<div className="title">{`# ${item.id}`}</div>}
      shadows="hover"
    >
      <div className="content">{getContent()}</div>
      <div className="extra">{getButtonGroup()}</div>
    </Card>
  );
};

export default CardBlock;
