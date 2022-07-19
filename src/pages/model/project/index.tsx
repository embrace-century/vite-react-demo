import { Card, Col, Row, Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { useQuery } from 'react-query';

import CardAdd from './_comp/CardAdd';
import CardBlock from './_comp/CardBlock';
import { IProject } from './interface';
import { ProjectService } from './service';

const { Title } = Typography;

const Index: React.FC = () => {
  const { data, isLoading, isError } = useQuery<IProject[], Error>(['project.index'], ProjectService.findAll);

  if (isLoading) {
    return <div>数据加载中...</div>;
  }
  if (isError) {
    return <div>数据加载出错</div>;
  }

  return (
    <Card>
      <Title heading={6}>我的项目</Title>
      <div className="mt-6">
        <Row gutter={24}>
          <Col
            lg={6}
            md={8}
            sm={12}
            xl={6}
            xs={24}
            xxl={6}
          >
            <CardAdd />
          </Col>

          {data?.length &&
            data?.map((ele) => (
              <Col
                key={ele.id}
                lg={6}
                md={8}
                sm={12}
                xl={6}
                xs={24}
                xxl={6}
              >
                <CardBlock item={ele} />
              </Col>
            ))}
        </Row>
      </div>
    </Card>
  );
};

export default Index;
