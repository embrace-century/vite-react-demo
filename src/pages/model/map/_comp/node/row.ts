import { ENode } from '@/constants';

const nodeTypeOption = Object.keys(ENode).map((key) => ({ label: key, value: key }));

type IOption = {
  label: string;
  value: string | number;
};

export type IFormItemConfig = {
  key: string;
  label: string;
  disabled: boolean;
  type: 'Input' | 'Select' | 'InputNumber';
  initValue?: string | number;
  trigger: 'blur' | 'change' | 'custom' | 'mount';
  rules?: any[];
  options?: IOption[];
};

const NodeRows: Record<string, IFormItemConfig> = {
  id: {
    key: 'id',
    label: 'ID',
    disabled: true,
    type: 'InputNumber',
    initValue: '',
    trigger: 'blur',
  },
  flood_level: {
    key: 'flood_level',
    label: '洪水高程',
    disabled: false,
    type: 'InputNumber',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '洪水高程值应为数值类型' },
    ],
  },
  ground_level: {
    key: 'ground_level',
    label: '地面高程',
    disabled: false,
    type: 'InputNumber',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '地面高程值应为数值类型' },
    ],
  },
  icm_id: {
    key: 'icm_id',
    label: 'icm_id',
    disabled: true,
    type: 'Input',
    initValue: '',
    trigger: 'blur',
  },
  lon: {
    key: 'lon',
    label: 'lon',
    disabled: true,
    type: 'InputNumber',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '经度应为数值类型' },
    ],
  },
  lat: {
    key: 'lat',
    label: 'lat',
    disabled: true,
    type: 'InputNumber',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '纬度应为数值类型' },
    ],
  },
  node_type: {
    key: 'node_type',
    label: '节点类型',
    disabled: false,
    type: 'Select',
    initValue: 'Manhole',
    trigger: 'blur',
    options: nodeTypeOption,
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: '节点类型的值应为字符串' },
    ],
  },
  remarks: {
    key: 'remarks',
    label: '备注',
    disabled: false,
    type: 'Input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: '备注应为字符类型' },
    ],
  },
  scenario_id: {
    key: 'scenario_id',
    label: 'scenario_id',
    disabled: false,
    type: 'InputNumber',
    initValue: '',
    trigger: 'blur',
    rules: [{ type: 'number', message: 'type error' }],
  },
  system_type: {
    key: 'system_type',
    label: '系统类型',
    disabled: false,
    type: 'Input',
    initValue: 'storm',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: '系统类型应为数字' },
    ],
  },
  x: {
    key: 'x',
    label: 'x',
    disabled: false,
    type: 'InputNumber',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '坐标x应为数值类型' },
    ],
  },
  y: {
    key: 'y',
    label: 'y',
    disabled: false,
    type: 'InputNumber',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '坐标y应为数值类型' },
    ],
  },
};

export default NodeRows;
