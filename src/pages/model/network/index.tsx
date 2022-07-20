import { Breadcrumb, Card, Col, Row, Typography } from '@douyinfe/semi-ui';
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

import CardAdd from './_comp/add-card';
import CardBlock from './_comp/card-block';
import { INetwork } from './interface';
import NetworkService from './service';

const { Title } = Typography;

const Show: React.FC = () => {
  const { projectId } = useParams();

  const { data, isLoading, isError } = useQuery<INetwork[], Error>(['network.index'], () =>
    NetworkService.findAll({ projectId: projectId! }),
  );

  if (isLoading) {
    return <div>数据加载中...</div>;
  }

  if (isError) {
    return <div>数据加载出错</div>;
  }

  return (
    <>
      <Breadcrumb
        className="mb-4"
        compact={false}
      >
        <Breadcrumb.Item>模型编排管理</Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/project">我的项目</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>管网方案列表</Breadcrumb.Item>
      </Breadcrumb>

      <Card>
        <Title heading={6}>管网方案列表</Title>
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

            {data! &&
              data.map((ele) => (
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
    </>
  );
};

export default Show;
