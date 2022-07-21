import '@/pages/model/project/index.scss';

import { Button, Card, Descriptions, Popconfirm, Space } from '@douyinfe/semi-ui';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { INetwork } from '../interface';

type IProps = {
  item: INetwork;
};

const CardBlock: FC<IProps> = (props) => {
  const {
    item: { id, name, scenario_id },
  } = props;

  const getContent = () => {
    // if (loading) {
    //   return <Skeleton active />;
    // }
    return <Descriptions data={[{ key: '名称', value: name }]} />;
  };

  const getButtonGroup = () => {
    return (
      <Space>
        <Popconfirm
          cancelText="否"
          content="此修改将不可逆"
          okText="是"
          position="top"
          title="确认删除吗？"
        >
          <Button
            theme="solid"
            type="danger"
          >
            删除
          </Button>
        </Popconfirm>

        <Link to={`/network/${scenario_id}`}>
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
      header={<div className="title">{`# ${id}`}</div>}
      shadows="hover"
    >
      <div className="content">{getContent()}</div>
      <div className="extra">{getButtonGroup()}</div>
    </Card>
  );
};

export default CardBlock;
