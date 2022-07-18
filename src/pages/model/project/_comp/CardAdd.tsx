import '../index.scss';

import { IconPlus } from '@douyinfe/semi-icons';
import { Card } from '@douyinfe/semi-ui';
import React, { FC } from 'react';

const CardAdd: FC = () => {
  return (
    <Card
      bordered={true}
      className="card-block add-card"
      shadows="hover"
      title={null}
    >
      <div className="content">
        <div className="add-icon">
          <IconPlus />
        </div>
        <div className="description">点击创建新项目</div>
      </div>
    </Card>
  );
};

export default CardAdd;
