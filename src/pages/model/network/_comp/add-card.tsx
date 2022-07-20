import '@/pages/model/project/index.scss';

import { IconPlus } from '@douyinfe/semi-icons';
import { Card } from '@douyinfe/semi-ui';
import React, { FC, useState } from 'react';

import New from './new';

const CardAdd: FC = () => {
  const [create, setCreate] = useState(false);

  return (
    <>
      <Card
        bordered={true}
        className="card-block add-card"
        shadows="hover"
        title={null}
      >
        <div
          className="content"
          onClick={() => {
            setCreate((create) => !create);
          }}
        >
          <div className="add-icon">
            <IconPlus />
          </div>
          <div className="description">点击创建网络方案</div>
        </div>
      </Card>

      <New
        visible={create}
        onClose={() => setCreate(false)}
      />
    </>
  );
};

export default CardAdd;
