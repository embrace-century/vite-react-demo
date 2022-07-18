import { PointType } from '@/configs/draw-config';
import request from '@/utils/request';

const Api = {
  CREATE_POINT: '/points',
  UPDATE_POINT: '/points',
};

export const createPoint = (pointData: PointType) =>
  request({
    url: Api.CREATE_POINT,
    method: 'POSt',
    data: pointData,
  });

export const updatePoint = (pointData: PointType) =>
  request({
    url: Api.UPDATE_POINT,
    method: 'POSt',
    data: pointData,
  });

export const deletePoint = (pointData: PointType) =>
  request({
    url: Api.UPDATE_POINT,
    method: 'POSt',
    data: pointData,
  });
