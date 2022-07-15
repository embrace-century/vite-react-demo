export type FormItemConfig = {
  key: string;
  label: string;
  disabled: boolean;
  type: 'input' | 'select';
  initValue: string | number;
  trigger: 'blur' | 'change' | 'custom' | 'mount';
  rules?: any[];
};

export type FormConfig = {
  [key: string]: FormItemConfig;
};

export const POINT_CONFIG: Record<string, FormItemConfig> = {
  class_name: {
    key: 'class_name',
    label: '类名',
    disabled: false,
    type: 'input',
    initValue: 'node',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: 'type error' },
    ],
  },
  node_type: {
    key: 'node_type',
    label: '节点类型',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: 'type error' },
    ],
  },
  system_type: {
    key: 'system_type',
    label: '系统类型',
    disabled: false,
    type: 'input',
    initValue: 1,
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: 'type error' },
    ],
  },
  lon: {
    key: 'lon',
    label: 'lon',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: 'type error' },
    ],
  },
  lat: {
    key: 'lat',
    label: 'lat',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: 'type error' },
    ],
  },
  x: {
    key: 'x',
    label: 'x',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: 'type error' },
    ],
  },
  y: {
    key: 'y',
    label: 'y',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: 'type error' },
    ],
  },
  ground_level: {
    key: 'ground_level',
    label: '地面高程',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: 'type error' },
    ],
  },
  flood_level: {
    key: 'flood_level',
    label: '洪水高程',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: 'type error' },
    ],
  },
  scenario_id: {
    key: 'scenario_id',
    label: 'scenario_id',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: 'type error' },
    ],
  },
  remarks: {
    key: 'remarks',
    label: '备注',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: 'type error' },
    ],
  },
};

export const FORM_DICT: Record<string, FormConfig> = {
  Point: POINT_CONFIG,
};
