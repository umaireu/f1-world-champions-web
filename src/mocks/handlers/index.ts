import type { RequestHandler } from 'msw';
import { handlers as seasonsHandlers } from './seasons-handler';
import { handlers as racesHandlers } from './races-handler';

export const handlers: RequestHandler[] = [
  ...seasonsHandlers,
  ...racesHandlers,
];
