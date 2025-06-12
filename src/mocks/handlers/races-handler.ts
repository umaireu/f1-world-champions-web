import { http, HttpResponse } from 'msw';
import type { RacesResponse } from '@api-types/index';
import { ENV_VARS } from '@utils/constants';
import { RACES_ENDPOINTS } from '@modules/races/constants';
import { MockRacesData2025 } from '../mock-data/races-mock-data';

const racesEndpoint = `${ENV_VARS.API_BASE_URL}${RACES_ENDPOINTS.GET_SEASON_RACES}`;

export const handlers = [
  // Season races endpoint - handle the :season parameter
  http.get(racesEndpoint, ({ params }) => {
    const season = params.season as string;

    // For now, we only have mock data for 2025, but we can extend this
    let raceData = MockRacesData2025;

    if (season !== '2025') {
      raceData = [];
    }

    const response: RacesResponse = {
      data: raceData,
      message: `Races data retrieved successfully for season ${season}`,
      count: raceData.length,
    };

    return HttpResponse.json(response);
  }),
];
