// @ts-nocheck
import { Form as SemiForm } from '@douyinfe/semi-ui';
import React from 'react';
import { useQuery } from 'react-query';

import { useAppSelector } from '@/stores';
import { drawSelector } from '@/stores/draw-slice';
import { convertPointToCoordinates } from '@/utils/geojson';

import { INode } from './interface';
import NodeRows from './row';
import NodeService from './service';

type IProps = {
  labelCol?: number;
  wrapperCol?: number;
  getFormApi: Function;
};

const { Input, InputNumber, Select } = SemiForm;

const Form = (props: IProps) => {
  const { nodeId } = useAppSelector(drawSelector);

  const { labelCol = 8, wrapperCol = 16, getFormApi } = props;

  const { data, isLoading, isError } = useQuery<INode, Error>(['node.show'], () =>
    NodeService.findById({ id: nodeId! }),
  );

  if (isLoading) {
    return <div>数据加载中...</div>;
  }

  if (isError) {
    return <div>数据加载出错</div>;
  }

  const { lonlat, xy } = data!;

  const [lon, lat] = convertPointToCoordinates(lonlat);
  const [x, y] = convertPointToCoordinates(xy);

  Object.keys(NodeRows).forEach((key) => {
    if (NodeRows[key].type === 'InputNumber') {
      NodeRows[key].initValue = parseFloat(data![key]);
    } else {
      NodeRows[key].initValue = data![key];
    }
  });

  NodeRows['lon'].initValue = lon;
  NodeRows['lat'].initValue = lat;
  NodeRows['x'].initValue = x;
  NodeRows['y'].initValue = y;

  return (
    <SemiForm
      getFormApi={getFormApi}
      labelAlign="right"
      labelCol={{ span: labelCol }}
      labelPosition="left"
      wrapperCol={{ span: wrapperCol }}
    >
      {Object.keys(NodeRows).map((formKey) => {
        const { label, disabled, rules, type, initValue, trigger, options } = NodeRows[formKey];
        switch (type) {
          case 'InputNumber':
            return (
              <InputNumber
                key={formKey}
                hideButtons
                disabled={disabled}
                field={formKey}
                initValue={initValue}
                label={label}
                rules={rules}
                style={{ width: 250 }}
                trigger={trigger}
              />
            );
          case 'Select':
            return (
              <Select
                disabled={disabled}
                field={formKey}
                initValue={initValue}
                label={label}
                rules={rules}
                style={{ width: 250 }}
              >
                {options?.map((option) => (
                  <Select.Option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </Select.Option>
                ))}
              </Select>
            );
          default:
            return (
              <Input
                key={formKey}
                disabled={disabled}
                field={formKey}
                initValue={initValue}
                label={label}
                rules={rules}
                style={{ width: 250 }}
                trigger={trigger}
              />
            );
        }
      })}
    </SemiForm>
  );
};

export default Form;
