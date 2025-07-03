import { ENV_VARS } from '@utils/constants';

export const API_CONFIG = {
  BASE_URL: ENV_VARS.API_BASE_URL,
  TIMEOUT: 30000, // 30 seconds
} as const;

// React Query Configuration
export const QUERY_CONFIG = {
  CACHE_TIME: 10 * 60 * 1000, // 5 minutes
  STALE_TIME: 5 * 60 * 1000, // 10 minutes

  RETRY_COUNT: 2,
  RETRY_DELAY: (attemptIndex: number) =>
    Math.min(1000 * 2 ** attemptIndex, 30000),

  // Background refetch
  REFETCH_ON_WINDOW_FOCUS: false,
  REFETCH_ON_RECONNECT: true,
} as const;
