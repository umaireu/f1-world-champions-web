/*
 * MSW Server setup for Node.js testing environment
 *
 * ESLint rule disabled below:
 * - MSW's `setupServer()` accepts handlers with `any` types due to MSW's flexible API design
 * - The spread operator triggers `no-unsafe-argument` when spreading arrays with `any` types
 * - This is safe since we control the handlers array and its types
 */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(...handlers);
