import { Form } from '@douyinfe/semi-ui';
import React, { useEffect } from 'react';

import { FORM_DICT } from '@/configs/draw-config';
import { useAppSelector } from '@/stores';
import { drawSelector } from '@/stores/draw-slice';
import { globalSelector } from '@/stores/global-slice';

type DrawFormProp = {
  labelCol?: number;
  wrapperCol?: number;
  getFormApi?: (formapi: any) => void;
};

export const DrawForm = (props: DrawFormProp) => {
  const { features } = useAppSelector(drawSelector);
  const { sideSheetVisible } = useAppSelector(globalSelector);
  const { labelCol = 6, wrapperCol = 20, getFormApi } = props;
  const { Input, InputNumber } = Form;
  // coordinates point: 一维数组 line: 二维数组 polygon: 三维数组
  const { geometry, properties } = features!;
  const { coordinates, type } = geometry;
  const formItems = FORM_DICT[type];

  switch (type) {
    case 'Point':
      formItems['lon'].initValue = (coordinates as Array<number>)[0];
      formItems['lat'].initValue = (coordinates as Array<number>)[1];
      break;
    case 'LineString':
      break;
    default:
      break;
  }

  // 当维护时给表单赋值
  useEffect(() => {
    if (sideSheetVisible) {
      Object.keys(formItems).forEach((key) => {
        if (properties[key]) {
          if (formItems[key].type === 'InputNumber') {
            formItems[key].initValue = parseFloat(properties[key]);
          } else {
            formItems[key].initValue = properties[key];
          }
        }
      });
    }
  }, [formItems, properties, sideSheetVisible]);

  return (
    <Form
      getFormApi={getFormApi}
      labelAlign="right"
      labelCol={{ span: labelCol }}
      labelPosition="left"
      wrapperCol={{ span: wrapperCol }}
    >
      {Object.keys(formItems).map((formKey) => {
        const { label, disabled, rules, type, initValue, trigger } = formItems[formKey];
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
                trigger={trigger}
              />
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
                trigger={trigger}
              />
            );
        }
      })}
    </Form>
  );
};
