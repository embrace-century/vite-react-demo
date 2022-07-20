import { axios } from '@/services';

import { INode, IPoint } from './interface';

// eg: [
//     {
//         "id": 20508,
//         "uuid": "b1797350-1087-4fec-a98c-568a0e3f7020",
//         "scenario_id": null,
//         "system_type": "storm",
//         "lonlat": "POINT (114.2143432535 34.214342)",
//         "replaced": false,
//         "created_at": "2022-07-14T06:35:14.028Z",
//         "updated_at": "2022-07-14T06:35:14.028Z",
//         "icm_id": null,
//         "ground_level": "1.001",
//         "flood_level": "1.002",
//         "deleted_at": null,
//         "xy": "POINT (843252.0 592454.0)",
//         "survey": false,
//         "zoom": 0,
//         "remarks": null
//     }]
const findAll = async () => {
  const response = await axios.get<INode[]>('/layer/nodes');
  return response.data;
};

const findById = async (params: { id: number }) => {
  const { id } = params;
  const response = await axios.get<INode>(`/layer/nodes/${id}`);
  return response.data;
};

const create = async (params: IPoint) => {
  const response = await axios.post<IPoint>('/points', params);
  return response.data;
};

const update = async (params: IPoint) => {
  const { id, ...rest } = params;
  const response = await axios.put<IPoint>(`/points/${id}`, rest);
  return response.data;
};

const remove = async (params: { id: number }) => {
  const { id } = params;
  const response = await axios.delete<IPoint>(`/points/${id}`);
  return response.data;
};

const getPointType = async () => {
  const response = await axios.get<any>('/constant/point_types');
  return response.data;
};

const NodeService = {
  findAll,
  findById,
  create,
  update,
  remove,
  getPointType,
};

export default NodeService;
