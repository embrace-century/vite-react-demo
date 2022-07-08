import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Banner } from '@douyinfe/semi-ui';

// Todo: 加环境配置
// const env = process.env.NDOE_ENV || 'development';

const BASE_URL = '/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

// 请求拦截
// axios.interceptors.request.use((request) => {
//   // 添加token、应用信息等
//   request.headers = {
//     ...request.headers,
//     token: sessionStorage.getItem('x-viteApp-token') || '',
//   };
//   return request;
// });

// 对返回的结果做处理
instance.interceptors.response.use(
  (response) => {
    const { status, data } = response;
    
    if (status !== 200 ) {
    }
    const res = response.data;

    if (res.code === 3) {
      return null;
    }
    return res;
  },
  (err) => {
    // 
    console.log('err', err);
  },
);

const request = <T>(reqConfig: AxiosRequestConfig): Promise<T> => {
  return instance.request<T, T>(reqConfig);
};

export default request;
export type { AxiosInstance, AxiosResponse };