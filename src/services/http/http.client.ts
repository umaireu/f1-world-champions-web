import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type AxiosError,
} from 'axios';
import { IS_DEV_ENV } from '@utils/constants';
import { logDetails } from '@utils/utils';
import { API_CONFIG } from '../constants';

/* Create and configure Axios instance with interceptors */
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
      // Add timestamp for request tracking
      const timestamp = Date.now();
      config.metadata = { timestamp };

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
      // Simple logging in development
      if (IS_DEV_ENV) {
        const startTime = (response.config.metadata?.timestamp as number) || 0;
        const duration = Date.now() - startTime;
        logDetails({
          message: ` ${response.status} ${response.config.url} (${duration}ms)`,
        });
      }
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return instance;
}

export const httpClient = createHttpClient();
