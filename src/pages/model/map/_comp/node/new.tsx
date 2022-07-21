import { Form } from '@douyinfe/semi-ui';
import React from 'react';

import { useAppSelector } from '@/stores';
import { drawSelector } from '@/stores/draw-slice';

import NodeRows from './row';

type DrawFormProp = {
  labelCol?: number;
  wrapperCol?: number;
  getFormApi?: (formapi: any) => void;
};

const { Input, InputNumber, Select } = Form;

const New = (props: DrawFormProp) => {
  const { features } = useAppSelector(drawSelector);
  const { labelCol = 8, wrapperCol = 16, getFormApi } = props;
  const { geometry, properties } = features!;
  const { coordinates } = geometry;

  NodeRows['lon'].initValue = (coordinates as Array<number>)[0];
  NodeRows['lat'].initValue = (coordinates as Array<number>)[1];

  Object.keys(NodeRows).forEach((key) => {
    if (properties[key]) {
      if (NodeRows[key].type === 'InputNumber') {
        NodeRows[key].initValue = parseFloat(properties[key]);
      } else {
        NodeRows[key].initValue = properties[key];
      }
    }
  });

  return (
    <Form
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
                key={formKey}
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
    </Form>
  );
};

export default New;
