/**
 * Query Hooks for Races
 */

import { useQuery } from '@tanstack/react-query';
import { RACES_QUERY_KEYS } from './constants';
import { getSeasonRaces } from './races.service';

export function useSeasonRaces(season: number | undefined) {
  if (!season) {
    throw new Error('Season is required');
  }
  return useQuery({
    queryKey: [...RACES_QUERY_KEYS.SEASON_RACES(season)],
    queryFn: () => getSeasonRaces({ season }),
  });
}
