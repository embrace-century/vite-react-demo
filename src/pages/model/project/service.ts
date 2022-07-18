import { axios } from '@/services';

import { INetwork, IProject } from './interface';

// eg: [
//   {
//     id: 1,
//     uuid: 'ef1fd306-62f2-4a85-ab00-7bb50a6745d6',
//     name: '南湖茶山刘项目',
//     icm_path: 'snumbat://localhost:40000/chanshanliu',
//   },
// ];

const findAll = async () => {
  const response = await axios.get<IProject[]>('/projects');
  return response.data;
};

const ProjectService = {
  findAll,
};

const findAllNetwork = async (projectId: string) => {
  const response = await axios.get<INetwork[]>(`/projects/${projectId}/networks`);
  return response.data;
};

const NetworkService = {
  findAll: findAllNetwork,
};

export { NetworkService, ProjectService };
