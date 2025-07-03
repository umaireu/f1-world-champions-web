import { ErrorDisplay } from '@components/ui/error/error';
import { SeasonsList } from './components/seasons-list/seasons-list';
import { useTranslation } from 'react-i18next';
import { useAllSeasons } from './seasons.queries';
import { AsyncRenderer } from '@components/async-renderer/async-renderer';
import type { Season } from '@api-types/index';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@routes/constants';
import { buildRoute } from '@utils/utils';
import { useCallback } from 'react';

const Seasons = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, error, isLoading } = useAllSeasons();
  const seasons = data?.data || [];

  const viewRacesHandler = useCallback(
    (seasonData: Season) => {
      void navigate(
        buildRoute(ROUTE_PATH.SEASON_RACES.href, { year: seasonData.season }),
      );
    },
    [navigate],
  );
  return (
    <AsyncRenderer
      loading={isLoading}
      error={error}
      data={data}
      renderError={() => (
        <ErrorDisplay
          error={error}
          title={t('seasons.error.title')}
          message={t('seasons.error.message')}
          showRefresh
        />
      )}
      renderData={() => (
        <>
          <div className='bg-gradient-to-r from-black to-gray-800 px-6 py-4 rounded-t-xl'>
            <p className='text-xl font-bold text-white'>{t('seasons.title')}</p>
            <p className='text-gray-300 text-sm'>{t('seasons.description')}</p>
          </div>
          <SeasonsList seasons={seasons} onViewDetails={viewRacesHandler} />
        </>
      )}
    />
  );
};

export default Seasons;
