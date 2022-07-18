import { axios } from '@/services';

import { INode } from './interface';

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

const NodeService = {
  findAll,
};

export default NodeService;
