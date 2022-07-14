import request from '@/utils/request';

const Api = {
  POINT: '/points',
};

const pointData = {
  class_name: 'node',
  node_type: 'Manhole',
  system_type: 1,
  lon: 114.2143432535,
  lat: 34.214342,
  x: 843252,
  y: 592454,
  ground_level: 1.001,
  flood_level: 1.002,
};

export const postPoint = () =>
  request({
    url: Api.POINT,
    method: 'POSt',
    data: pointData,
  });
