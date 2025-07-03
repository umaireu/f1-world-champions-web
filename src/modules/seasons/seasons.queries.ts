import { useQuery } from '@tanstack/react-query';
import { getSeasons } from './seasons.service';
import { SEASONS_QUERY_KEYS } from './constants';

const FROM_YEAR = 2005;
const TO_YEAR = 2025;

/**
 * Hook to get seasons champions within a year range
 */
export function useAllSeasons() {
  return useQuery({
    queryKey: [...SEASONS_QUERY_KEYS.all],
    queryFn: () => getSeasons({ fromYear: FROM_YEAR, toYear: TO_YEAR }),
  });
}
