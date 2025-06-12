import {
  Routes as RouterRoutes,
  Route as RouterRoute,
  Navigate,
} from 'react-router';
import { Layout } from '@components/ui/layout/layout';
import { Seasons, Races } from '@modules/index';
import { ROUTE_PATH } from './constants';
import { PageNotFound } from '@components/ui/page-not-found/page-not-found';

export const Routes = () => {
  return (
    <RouterRoutes>
      <RouterRoute element={<Layout />}>
        <RouterRoute
          path={ROUTE_PATH.DEFAULT.href}
          element={<Navigate to={ROUTE_PATH.SEASONS.href} replace />}
        />
        <RouterRoute path={ROUTE_PATH.SEASONS.href} element={<Seasons />} />
        <RouterRoute path={ROUTE_PATH.SEASON_RACES.href} element={<Races />} />
        <RouterRoute path='*' element={<PageNotFound />} />
      </RouterRoute>
    </RouterRoutes>
  );
};
