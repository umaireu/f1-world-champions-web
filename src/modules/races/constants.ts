export const RACES_QUERY_KEYS = {
  SEASON_RACES: (season: number) => ['races', season] as const,
} as const;

export const RACES_ENDPOINTS = {
  GET_SEASON_RACES: '/races/season/:season',
} as const;
