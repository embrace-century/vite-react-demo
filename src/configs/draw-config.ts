export type FormItemConfig = {
  key: string;
  label: string;
  disabled: boolean;
  required: boolean;
  type: 'input' | 'select';
  initValue: string | number;
  trigger: 'blur' | 'change' | 'custom' | 'mount';
};

export type FormConfig = {
  [key: string]: FormItemConfig;
};

export const POINT_CONFIG: Record<string, FormItemConfig> = {
  class_name: {
    key: 'class_name',
    label: 'class_name',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  node_type: {
    key: 'node_type',
    label: 'node_type',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  system_type: {
    key: 'system_type',
    label: 'system_type',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  lon: {
    key: 'lon',
    label: 'lon',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  lat: {
    key: 'lat',
    label: 'lat',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  x: {
    key: 'x',
    label: 'x',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  y: {
    key: 'y',
    label: 'y',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  ground_level: {
    key: 'ground_level',
    label: 'ground_level',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  flood_level: {
    key: 'flood_level',
    label: 'flood_level',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  scenario_id: {
    key: 'scenario_id',
    label: 'scenario_id',
    disabled: false,
    required: false,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
  remarks: {
    key: 'scenario_id',
    label: 'scenario_id',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
    trigger: 'blur',
  },
};

export const FORM_DICT: Record<string, FormConfig> = {
  Point: POINT_CONFIG,
};
