import { IllustrationConstruction, IllustrationNoAccess } from '@douyinfe/semi-illustrations';
import { Button, Empty } from '@douyinfe/semi-ui';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type Iprops = {
  title?: string;
  description?: string;
  type: '404' | '403';
};

const Result: FC<Iprops> = ({ title, description, type }) => {
  const navigate = useNavigate();
  return (
    <Empty
      description={description}
      image={
        type === '403' ? (
          <IllustrationNoAccess style={{ width: 150, height: 150 }} />
        ) : (
          <IllustrationConstruction style={{ width: 150, height: 150 }} />
        )
      }
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      title={title}
    >
      <Button
        style={{ padding: '6px 24px', width: ' 180px' }}
        theme="solid"
        type="primary"
        onClick={
          type === '403'
            ? () => navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })
            : () => navigate(`/dashboard/workbeach`, { replace: true })
        }
      >
        {type === '403' ? '去登录' : '回到首页'}
      </Button>
    </Empty>
  );
};

export default Result;
