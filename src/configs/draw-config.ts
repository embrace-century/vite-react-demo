export type FormItemConfig = {
  key: string;
  label: string;
  disabled: boolean;
  required: boolean;
  type: 'input' | 'select';
  initValue: string | number;
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
  },
  node_type: {
    key: 'node_type',
    label: 'node_type',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
  },
  system_type: {
    key: 'system_type',
    label: 'system_type',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
  },
  lon: {
    key: 'lon',
    label: 'lon',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
  },
  lat: {
    key: 'lat',
    label: 'lat',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
  },
  x: {
    key: 'x',
    label: 'x',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
  },
  y: {
    key: 'y',
    label: 'y',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
  },
  ground_level: {
    key: 'ground_level',
    label: 'ground_level',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
  },
  flood_level: {
    key: 'flood_level',
    label: 'flood_level',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
  },
  scenario_id: {
    key: 'scenario_id',
    label: 'scenario_id',
    disabled: false,
    required: false,
    type: 'input',
    initValue: '',
  },
  remarks: {
    key: 'scenario_id',
    label: 'scenario_id',
    disabled: false,
    required: true,
    type: 'input',
    initValue: '',
  },
};

export const FORM_DICT: Record<string, FormConfig> = {
  point: POINT_CONFIG,
};
