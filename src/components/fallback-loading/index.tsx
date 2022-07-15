import { Banner, Spin } from '@douyinfe/semi-ui';
import React, { FC } from 'react';

type FallbackMessageProps = {
  message: string;
  description?: string;
};

const SuspendFallbackLoading: FC<FallbackMessageProps> = ({ message, description }) => {
  return (
    <Spin tip="正在加载中...">
      <Banner
        bordered
        closeIcon={null}
        description={<div>{description}</div>}
        fullMode={false}
        icon={null}
        type="info"
      />
    </Spin>
  );
};

export default SuspendFallbackLoading;
