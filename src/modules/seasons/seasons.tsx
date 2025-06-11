import { ErrorDisplay } from '@shared/components/ui/error/error';
import { SeasonsList } from './components/seasons-list/seasons-list';
import { useTranslation } from 'react-i18next';
import { useAllSeasons } from './seasons.queries';
import { AsyncRenderer } from '@shared/components/async-renderer/async-renderer';
import type { Season } from '@api-types/index';
import { useNavigate } from 'react-router';
import { ROUTE_PATH } from '@shared/utils/constants';
import { buildRoute } from '@shared/utils/utils';

const Seasons = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, isLoading, error } = useAllSeasons();
  const seasons = data?.data || [];

  const viewRacesHandler = (seasonData: Season) => {
    void navigate(
      buildRoute(ROUTE_PATH.SEASON_RACES.href, { year: seasonData.season }),
    );
  };
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
            <h2 className='text-xl font-bold text-white'>
              {t('seasons.title')}
            </h2>
            <p className='text-gray-300 text-sm'>{t('seasons.description')}</p>
          </div>
          <SeasonsList seasons={seasons} onViewDetails={viewRacesHandler} />
        </>
      )}
    />
  );
};

export default Seasons;
