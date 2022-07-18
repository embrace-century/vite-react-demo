import { Row } from '@douyinfe/semi-ui';
import React from 'react';
import { useQuery } from 'react-query';

import Card from './_comp/card';
import { IProject } from './interface';
import { ProjectService } from './service';

const Index: React.FC = () => {
  const { data, isLoading, isError } = useQuery<IProject[], Error>(['project_index'], ProjectService.findAll, {
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    staleTime: 0,
    cacheTime: 5000,
  });

  if (isLoading) {
    return <div>数据加载中...</div>;
  }
  if (isError) {
    return <div>数据加载出错</div>;
  }

  return (
    <div className="flex flex-col">
      <div className="grid">
        <Row gutter={[16, 24]}>
          {data?.length &&
            data?.map((ele) => (
              <Card
                key={ele.id}
                item={ele}
              />
            ))}
        </Row>
      </div>
    </div>
  );
};

export default Index;
