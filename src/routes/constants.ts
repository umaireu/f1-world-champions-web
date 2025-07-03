export const ROUTE_PATH = {
  DEFAULT: { href: '/' },
  SEASONS: {
    href: '/seasons',
  },
  SEASON_RACES: {
    href: '/season/:year/races',
  },
} as const;
