import { http, HttpResponse } from 'msw';
import type { SeasonsResponse } from '@api-types/index';
import { ENV_VARS } from '@utils/constants';
import { SEASONS_ENDPOINTS } from '@modules/seasons/constants';
import { MockSeasonsData } from '../mock-data/seasons-mock-data';

const seasonsEndpoint = `${ENV_VARS.API_BASE_URL}${SEASONS_ENDPOINTS.GET_SEASONS}`;

export const handlers = [
  // Seasons endpoint - handle query parameters in the function
  http.get(seasonsEndpoint, () => {
    const response: SeasonsResponse = {
      data: MockSeasonsData,
      message: `Seasons data retrieved successfully`,
      count: MockSeasonsData.length,
    };

    return HttpResponse.json(response);
  }),
];

export const seasonsErrorHandler = {
  serverError: http.get(seasonsEndpoint, () => {
    return HttpResponse.error();
  }),
};
