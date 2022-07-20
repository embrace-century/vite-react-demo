import { axios } from '@/services';

import { IPoint } from './interface';

const createPoint = async (params: { createData: IPoint }) => {
  const { createData } = params;
  const response = await axios.post<IPoint[]>('/points', createData);
  return response.data;
};

const updatePoint = async (params: { pointId: string | number; updateData: IPoint }) => {
  const { pointId, updateData } = params;
  const response = await axios.put<IPoint[]>(`/points/${pointId}`, updateData);
  return response.data;
};

const deletePoint = async (params: { pointId: string | number; classNme: string }) => {
  const { pointId, classNme } = params;
  const response = await axios.delete<IPoint[]>(`/points/${pointId}`, {
    params: { class_name: classNme },
  });
  return response.data;
};

const getPointType = async () => {
  const response = await axios.get<any>(`/constant/point_types`);
  return response.data;
};

const getLineType = async () => {
  const response = await axios.get<any>(`/constant/line_types`);
  return response.data;
};

const PointService = {
  createPoint,
  updatePoint,
  deletePoint,
  getPointType,
};

const LineService = {
  getLineType,
};

export { LineService, PointService };
