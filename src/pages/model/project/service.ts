import { axios } from '@/services';

import { ProjectType } from './interface';

// eg: [
//   {
//     id: 1,
//     uuid: 'ef1fd306-62f2-4a85-ab00-7bb50a6745d6',
//     name: '南湖茶山刘项目',
//     icm_path: 'snumbat://localhost:40000/chanshanliu',
//   },
// ];

const findAll = async () => {
  const response = await axios.get<ProjectType[]>('/projects');
  return response.data;
};

const ProjectService = {
  findAll,
};

export default ProjectService;
