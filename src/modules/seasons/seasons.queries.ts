/**
 * React Query Hooks for Seasons
 * Co-located with seasons service for better organization
 */

import { useQuery } from '@tanstack/react-query';
import { getSeasons } from './seasons.service';
import { SEASONS_QUERY_KEYS } from './constants';

/**
 * Hook to get seasons champions within a year range
 */
export function useAllSeasons() {
  return useQuery({
    queryKey: [...SEASONS_QUERY_KEYS.all],
    queryFn: () => getSeasons({ fromYear: 2005, toYear: 2025 }),
  });
}
