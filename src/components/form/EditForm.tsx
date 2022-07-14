import { Banner, Button, Form, SideSheet, Typography } from '@douyinfe/semi-ui';
import React from 'react';

import { useAppDispatch, useAppSelector } from '@/stores';
import { globalSelector, setSideSheetVisible } from '@/stores/global-slice';

export const EditForm = () => {
  const { DatePicker, Select, Radio, RadioGroup } = Form;
  const dispatch = useAppDispatch();
  const { sideSheetVisible } = useAppSelector(globalSelector);

  const footer = (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button style={{ marginRight: 8 }}>关闭</Button>
      <Button theme="solid">提交</Button>
    </div>
  );
  return (
    <SideSheet
      bodyStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
      footer={footer}
      headerStyle={{ borderBottom: '1px solid var(--semi-color-border)' }}
      mask={false}
      title={<Typography.Title heading={4}>创建资源包</Typography.Title>}
      visible={sideSheetVisible}
      onCancel={() => dispatch(setSideSheetVisible(false))}
    >
      <Form>
        <DatePicker
          field="date"
          initValue={new Date()}
          label={{ text: '创建时间', required: true }}
          style={{ width: 272 }}
          type="dateTime"
        />
        <RadioGroup
          direction="horizontal"
          field="type"
          initValue="all"
          label="目标操作系统"
        >
          <Radio value="all">全平台</Radio>
          <Radio value="ios">IOS</Radio>
          <Radio value="android">Android</Radio>
          <Radio value="web">Web</Radio>
        </RadioGroup>
        <RadioGroup
          direction="horizontal"
          field="origin"
          initValue="scm"
          label="资源包来源"
        >
          <Radio value="scm">从SCM上传</Radio>
          <Radio value="manual">手动上传</Radio>
        </RadioGroup>
        <Banner
          bordered
          description={
            <>
              <Typography.Text strong>当前部署环境：线上部署</Typography.Text>
              <br />
              <Typography.Text>请选择正确的SCM构建产物，防止出现不符合预期的发布操作。</Typography.Text>
            </>
          }
          fullMode={false}
          icon={null}
          type="warning"
        />
        <br />
        <Select
          multiple
          field="users"
          initValue={['1', '2', '3', '4']}
          label={{ text: '创建用户', required: true }}
          style={{ width: 560 }}
        >
          <Select.Option value="1">曲晨一</Select.Option>
          <Select.Option value="2">夏可曼</Select.Option>
          <Select.Option value="3">曲晨三</Select.Option>
          <Select.Option value="4">蔡妍</Select.Option>
        </Select>
      </Form>
    </SideSheet>
  );
};
