export const API_CONFIG = {
  BASE_URL: `${import.meta.env.VITE_API_BASE_URL}`,
  TIMEOUT: 10000, // 10 seconds
} as const;

// React Query Configuration
export const QUERY_CONFIG = {
  CACHE_TIME: 30 * 60 * 1000, // 30 minutes - F1 historical data doesn't change
  STALE_TIME: 5 * 60 * 1000, // 5 minutes - consider data fresh for 5 min

  RETRY_COUNT: 2,
  RETRY_DELAY: (attemptIndex: number) =>
    Math.min(1000 * 2 ** attemptIndex, 30000),

  // Background refetch
  REFETCH_ON_WINDOW_FOCUS: false, // F1 data is mostly historical
  REFETCH_ON_RECONNECT: true,
} as const;
