import axios, { CancelToken } from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_ENDPOINT,
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosInstance;
export type { CancelToken };
