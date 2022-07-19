import { Card, Col, Row, Typography } from '@douyinfe/semi-ui';
import React, { createContext, useMemo } from 'react';
import { useQuery } from 'react-query';

import { buildGeojsonFromPoint } from '@/pages/model/node-layer/helper';
import { INode } from '@/pages/model/node-layer/interface';
import NodeService from '@/pages/model/node-layer/service';

import { AddForm } from './_comp/AddForm';
import { EditForm } from './_comp/EditForm';
import { MapboxInstance } from './_comp/MapboxInstance';
import { MapDataTable } from './_comp/MapDataTable';
import { MapFeatures } from './map-context';

const { Title } = Typography;

const Map = () => {
  const { data, isLoading, isError } = useQuery<INode[], Error>(['node_index'], NodeService.findAll);

  const nodeData = useMemo(() => {
    return buildGeojsonFromPoint(data);
  }, [data]);
  // 数据不对, 数据到河南去了
  console.log(`🚀 ~ file: index.tsx ~ line 41 ~ nodeData ~ nodeData`, nodeData);

  // if (isLoading) {
  //   return <div>数据加载中...</div>;
  // }
  // if (isError) {
  //   return <div>数据加载出错</div>;
  // }

  return (
    <MapFeatures.Provider value={nodeData}>
      <Row gutter={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}>
        <Col
          lg={18}
          md={18}
          sm={18}
          xl={18}
          xs={18}
        >
          <Card>
            <Title heading={6}>我的项目</Title>

            <div className="mt-6">
              <MapboxInstance />
              <EditForm />
              <AddForm />
            </div>
          </Card>
        </Col>

        <Col
          lg={6}
          md={6}
          sm={6}
          xl={6}
          xs={6}
        >
          <Card style={{ height: '90vh' }}>
            <MapDataTable />
          </Card>
        </Col>
      </Row>
    </MapFeatures.Provider>
  );
};

export default Map;
