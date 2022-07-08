import { Modal } from '@douyinfe/semi-ui';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { BASE_URL } from '@/constants';

// Todo: 加环境配置
// const env = process.env.NDOE_ENV || 'development';

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
    const { status, data: res } = response;

    if (status !== 200) {
      // 请求失败的错误信息
      const STATUS_ERROR = {
        content: `返回状态码为${status}，请求未成功`,
      };
      Modal.error(STATUS_ERROR);
    }

    if (res.code === 3) {
      return res;
    }
    return res;
  },
  (err) => {
    const STATUS_ERROR = {
      content: `发生未知错误，请求未成功`,
    };
    Modal.error(STATUS_ERROR);
  },
);

const request = <T>(reqConfig: AxiosRequestConfig): Promise<T> => {
  return instance.request<T, T>(reqConfig);
};

export default request;
export type { AxiosInstance, AxiosResponse };
