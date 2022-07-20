import { axios } from '@/services';

import { IProject } from './interface';

// eg: [
//   {
//     id: 1,
//     uuid: 'ef1fd306-62f2-4a85-ab00-7bb50a6745d6',
//     name: '南湖茶山刘项目',
//     icm_path: 'snumbat://localhost:40000/chanshanliu',
//     synced: false
//   },
// ];

const findAll = async () => {
  const response = await axios.get<IProject[]>('/projects');
  return response.data;
};

const create = async (params: { name: string }) => {
  const response = await axios.post<IProject>('/projects', params);
  return response.data;
};

const remove = async (params: { id: number }) => {
  const { id } = params;
  const response = await axios.delete<IProject>(`/projects/${id}`);
  return response.data;
};

const sync = async (params: { id: number }) => {
  const response = await axios.post<IProject>('/sync/projects', params);
  return response.data;
};

const ProjectService = {
  findAll,
  create,
  remove,
  sync,
};

export default ProjectService;
