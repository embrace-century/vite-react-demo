export type IFormItemConfig = {
  key: string;
  label: string;
  disabled: boolean;
  type: 'input' | 'select';
  initValue: string | number;
  trigger: 'blur' | 'change' | 'custom' | 'mount';
  rules?: any[];
};

export type IFormConfig = {
  [key: string]: IFormItemConfig;
};

export const POINT_CONFIG: Record<string, IFormItemConfig> = {
  class_name: {
    key: 'class_name',
    label: '类名',
    disabled: true,
    type: 'input',
    initValue: 'node',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: '类名应为字符串' },
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
      { type: 'string', message: '节点类型的值应为字符串' },
    ],
  },
  system_type: {
    key: 'system_type',
    label: '系统类型',
    disabled: true,
    type: 'input',
    initValue: 1,
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '系统类型应为数字' },
    ],
  },
  lon: {
    key: 'lon',
    label: 'lon',
    disabled: true,
    type: 'input',
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
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '纬度应为数值类型' },
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
      { type: 'string', message: '坐标x应为数值类型' },
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
      { type: 'string', message: '坐标y应为数值类型' },
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
      { type: 'string', message: '地面高程值应为数值类型' },
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
      { type: 'string', message: '洪水高程值应为数值类型' },
    ],
  },
  scenario_id: {
    key: 'scenario_id',
    label: 'scenario_id',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [{ type: 'number', message: 'type error' }],
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
      { type: 'string', message: '备注应为字符类型' },
    ],
  },
};

export const LINESTRING_CONFIG: Record<string, IFormItemConfig> = {
  class_name: {
    key: 'class_name',
    label: '类名',
    disabled: true,
    type: 'input',
    initValue: 'node',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'string', message: '类名应为字符串' },
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
      { type: 'string', message: '节点类型的值应为字符串' },
    ],
  },
  system_type: {
    key: 'system_type',
    label: '系统类型',
    disabled: true,
    type: 'input',
    initValue: 1,
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '系统类型应为数字' },
    ],
  },
  lon: {
    key: 'lon',
    label: 'lon',
    disabled: true,
    type: 'input',
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
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [
      { required: true, message: '必填' },
      { type: 'number', message: '纬度应为数值类型' },
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
      { type: 'string', message: '坐标x应为数值类型' },
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
      { type: 'string', message: '坐标y应为数值类型' },
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
      { type: 'string', message: '地面高程值应为数值类型' },
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
      { type: 'string', message: '洪水高程值应为数值类型' },
    ],
  },
  scenario_id: {
    key: 'scenario_id',
    label: 'scenario_id',
    disabled: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
    rules: [{ type: 'number', message: 'type error' }],
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
      { type: 'string', message: '备注应为字符类型' },
    ],
  },
};

export const FORM_DICT: Record<string, IFormConfig> = {
  Point: POINT_CONFIG,
  LineString: LINESTRING_CONFIG,
};
