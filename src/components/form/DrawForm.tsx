import { Form } from '@douyinfe/semi-ui';
import React, { useEffect } from 'react';

import { FORM_DICT } from '@/configs/draw-config';
import { useAppSelector } from '@/stores';
import { drawSelector } from '@/stores/draw-slice';

type DrawFormProp = {
  labelCol?: number;
  wrapperCol?: number;
  getFormApi?: (formapi: any) => void;
};

export const DrawForm = (props: DrawFormProp) => {
  const { features } = useAppSelector(drawSelector);
  const { labelCol = 6, wrapperCol = 20, getFormApi } = props;
  const { Input } = Form;
  // coordinates point: 一维数组 line: 二维数组 polygon: 三维数组
  const { geometry } = features!;
  const { coordinates, type } = geometry;
  const formItems = FORM_DICT[type];

  useEffect(() => {
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
  }, [coordinates, formItems, type]);

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
        return type === 'input' ? (
          <Input
            key={formKey}
            disabled={disabled}
            field={formKey}
            initValue={initValue}
            label={label}
            rules={rules}
            trigger={trigger}
          />
        ) : null;
      })}
    </Form>
  );
};
