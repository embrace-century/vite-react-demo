import { axios } from '@/services';

import { INetwork } from '../interface';

const findAll = async (projectId: string) => {
  const response = await axios.get<INetwork[]>(`/projects/${projectId}/networks`);
  return response.data;
};

const NetworkService = {
  findAll,
};

export default NetworkService;
