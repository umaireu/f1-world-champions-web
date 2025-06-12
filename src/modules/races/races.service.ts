import { httpClient } from '@services/http/http.client';
import { buildRoute, logDetails } from '@utils/utils';
import type { RacesResponse } from '@api-types/index';
import { IS_DEV_ENV } from '@utils/constants';
import { RACES_ENDPOINTS } from './constants';

/**
 * Get season races
 */
export async function getSeasonRaces(params: {
  season: number;
}): Promise<RacesResponse> {
  if (IS_DEV_ENV) {
    logDetails({
      message: 'Getting season races',
      additionalArgs: [params],
    });
  }
  try {
    const response = await httpClient.get<RacesResponse>(
      buildRoute(RACES_ENDPOINTS.GET_SEASON_RACES, {
        season: params.season,
      }),
    );
    if (IS_DEV_ENV) {
      logDetails({
        message: `Retrieved ${response.data.count} seasons`,
      });
    }
    return response.data;
  } catch (error) {
    logDetails({
      message: `Failed to fetch season(${params.season})  races: ${error instanceof Error ? error.message : 'Unknown error'}`,
    });
    throw error;
  }
}
