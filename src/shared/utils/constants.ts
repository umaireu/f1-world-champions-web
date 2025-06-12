export const ROUTE_PATH = {
  DEFAULT: { href: '/' },
  SEASONS: {
    href: '/seasons',
  },
  SEASON_RACES: {
    href: '/season/:year/races',
  },
};

export const IS_DEV_ENV = import.meta.env.DEV;
