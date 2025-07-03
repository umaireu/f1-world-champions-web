import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from 'axios';
import { API_CONFIG } from '../constants';

function createHttpClient(): AxiosInstance {
  const instance = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    timeout: API_CONFIG.TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  // Request interceptor
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error: unknown) => {
      return Promise.reject(
        error instanceof Error ? error : new Error(String(error)),
      );
    },
  );

  // Response interceptor
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return instance;
}

export const httpClient = createHttpClient();
