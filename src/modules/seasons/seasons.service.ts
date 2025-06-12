import { httpClient } from '@services/http/http.client';
import { logDetails } from '@utils/utils';
import type { SeasonsParams, SeasonsResponse } from '@api-types/index';
import { IS_DEV_ENV } from '@utils/constants';
import { SEASONS_ENDPOINTS } from './constants';

/**
 * Get seasons champions within a specific year range
 */
export async function getSeasons(
  params: SeasonsParams,
): Promise<SeasonsResponse> {
  if (IS_DEV_ENV) {
    logDetails({
      message: 'Getting seasons champions',
      additionalArgs: [params],
    });
  }
  try {
    const response = await httpClient.get<SeasonsResponse>(
      SEASONS_ENDPOINTS.CHAMPIONS,
      {
        params: {
          fromYear: params.fromYear,
          toYear: params.toYear,
        },
      },
    );
    if (IS_DEV_ENV) {
      logDetails({
        message: `Retrieved ${response.data.count} seasons`,
      });
    }
    return response.data;
  } catch (error) {
    logDetails({
      message: `Failed to fetch seasons: ${error instanceof Error ? error.message : 'Unknown error'}`,
    });
    throw error;
  }
}
