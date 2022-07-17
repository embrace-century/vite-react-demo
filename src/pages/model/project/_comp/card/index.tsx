import { Card, Col, Typography } from '@douyinfe/semi-ui';
import React, { FC } from 'react';

import { ProjectType } from '../../interface';

type Props = {
  item: ProjectType;
};

const Index: FC<Props> = ({ item }) => {
  const { Text, Title, Paragraph } = Typography;

  return (
    <Col
      className="col-content"
      span={6}
    >
      <Card
        headerExtraContent={<Text link>查看</Text>}
        style={{ maxWidth: 360 }}
        title={`${item.id} #`}
      >
        <Title heading={4}>uuid: </Title>
        <Paragraph>{item.uuid}</Paragraph>
        <br />

        <Title heading={4}>name</Title>
        <Paragraph>{item.name}</Paragraph>
        <br />

        <Title heading={4}>icm_path</Title>
        <Paragraph>{item.icm_path}</Paragraph>
      </Card>
    </Col>
  );
};

export default Index;
