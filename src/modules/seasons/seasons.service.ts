import { httpClient } from '@services/http/http.client';
import { logDetails } from '@utils/utils';
import type { SeasonsParams, SeasonsResponse } from '@api-types/index';
import { SEASONS_ENDPOINTS } from './constants';

/**
 * Get seasons champions within a specific year range
 */
export async function getSeasons(
  params: SeasonsParams,
): Promise<SeasonsResponse> {
  try {
    const response = await httpClient.get<SeasonsResponse>(
      SEASONS_ENDPOINTS.GET_SEASONS,
      {
        params: {
          fromYear: params.fromYear,
          toYear: params.toYear,
        },
      },
    );

    return response.data;
  } catch (error) {
    logDetails({
      message: `Failed to fetch seasons: ${error instanceof Error ? error.message : 'Unknown error'}`,
    });
    throw error;
  }
}
