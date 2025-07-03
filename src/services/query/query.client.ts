import { QueryClient } from '@tanstack/react-query';
import { QUERY_CONFIG } from '../constants';

export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Cache configuration
        gcTime: QUERY_CONFIG.CACHE_TIME,
        staleTime: QUERY_CONFIG.STALE_TIME,

        // Retry configuration
        retry: (failureCount) => {
          return failureCount < QUERY_CONFIG.RETRY_COUNT;
        },
        retryDelay: QUERY_CONFIG.RETRY_DELAY,

        // Background refetch settings
        refetchOnWindowFocus: QUERY_CONFIG.REFETCH_ON_WINDOW_FOCUS,
        refetchOnReconnect: QUERY_CONFIG.REFETCH_ON_RECONNECT,
        refetchOnMount: true,

        throwOnError: false, // Handle errors in components using error states
      },
    },
  });
}

export const queryClient = createQueryClient();
