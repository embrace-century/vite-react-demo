import { axios } from '@/services';

import { INetwork } from '../interface';

const findAll = async (projectId: string) => {
  const response = await axios.get<INetwork[]>(`/projects/${projectId}/networks`);
  return response.data;
};

const create = async (params: { projectId: string; name: string }) => {
  const { projectId, name } = params;
  const response = await axios.post<INetwork>(`/projects/${projectId}/networks`, { name });
  return response.data;
};

const NetworkService = {
  findAll,
  create,
};

export default NetworkService;
