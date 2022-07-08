import { Banner } from '@douyinfe/semi-ui';
import React from 'react';

type ErrorMessageProps = {
  title: string;
  content: string;
};

export const ErrorMessage = ({ title, content }: ErrorMessageProps) => {
  return (
    <Banner
      bordered
      description={content}
      fullMode={false}
      title={title}
      type="warning"
    />
  );
};
