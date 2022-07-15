import { Form } from '@douyinfe/semi-ui';
import React, { useEffect } from 'react';

import { FORM_DICT } from '@/configs/draw-config';
import { useAppDispatch, useAppSelector } from '@/stores';
import { drawSelector } from '@/stores/draw-slice';

export const DrawForm = () => {
  const dispatch = useAppDispatch();
  const { features } = useAppSelector(drawSelector);
  console.log('🚀 ~ file: DrawForm.tsx ~ line 11 ~ DrawForm ~ features', features);

  const { Input, Select } = Form;
  // coordinates point: 一维数组 line: 二维数组 polygon: 三维数组
  const { properties, geometry } = features!;
  const { coordinates, type } = geometry;
  const formItems = FORM_DICT[type];

  useEffect(() => {
    switch (type) {
      case 'Point':
        formItems['lon'].initValue = (coordinates as Array<number>)[0];
        formItems['lat'].initValue = (coordinates as Array<number>)[1];
        break;
      default:
        break;
    }
  }, [coordinates, formItems, type]);

  return (
    <Form
      labelAlign="right"
      labelCol={{ span: 6 }}
      labelPosition="left"
      wrapperCol={{ span: 20 }}
    >
      {Object.keys(formItems).map((formKey) => {
        const { label, disabled, required, type, initValue, trigger } = formItems[formKey];
        return type === 'input' ? (
          <Input
            key={formKey}
            field={formKey}
            initValue={initValue}
            label={label}
            trigger={trigger}
          />
        ) : null;
      })}
    </Form>
  );
};
