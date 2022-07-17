import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { INetwork } from './interface';
import { NetworkService } from './service';

const Show: React.FC = () => {
  const { projectId } = useParams();

  const { data, isLoading, isError } = useQuery<INetwork[], Error>(['network_index', { projectId }], () =>
    NetworkService.findAll(projectId!),
  );

  if (isLoading) {
    return <div>数据加载中...</div>;
  }
  if (isError) {
    return <div>数据加载出错</div>;
  }

  return (
    <div>
      hello world; Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident alias iure commodi tempore
      voluptate corrupti exercitationem recusandae iusto incidunt, ipsam facere ad voluptatem similique obcaecati
      impedit, tempora culpa aliquid.
    </div>
  );
};

export default Show;
