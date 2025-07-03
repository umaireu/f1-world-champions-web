import { useTranslation } from 'react-i18next';
import { RacesList } from './components/races-list/races-list';
import { useNavigate, useParams } from 'react-router';
import { useSeasonRaces } from './races.queries';
import { AsyncRenderer } from '@components/async-renderer/async-renderer';
import { ErrorDisplay } from '@components/ui/error/error';
import { Button } from '@components/ui/button/button';
import { ROUTE_PATH } from '@routes/constants';
import { useCallback } from 'react';

const Races = () => {
  const { t } = useTranslation();
  const { year } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useSeasonRaces(Number(year));
  const races = data?.data || [];

  const handleGoBack = useCallback(() => {
    void navigate(ROUTE_PATH.SEASONS.href);
  }, [navigate]);

  return (
    <div>
      <Button
        onClick={handleGoBack}
        className='mb-4 bg-gray-800 hover:bg-gray-700 text-white px-2 py-2 rounded-md transition-colors duration-200 flex items-center gap-2'
        aria-label={t('button.goBack')}>
        {t('button.goBack')}
      </Button>
      <AsyncRenderer
        loading={isLoading}
        error={error}
        data={data}
        renderError={() => (
          <ErrorDisplay
            error={error}
            title={t('races.error.title', { season: year })}
            message={t('races.error.message')}
            showRefresh
          />
        )}
        renderData={() => (
          <>
            <div className='bg-gradient-to-r from-black to-gray-800 px-6 py-4 rounded-t-xl'>
              <p className='text-xl font-bold text-white'>
                {t('races.title', { season: year })}
              </p>
              <p className='text-gray-300 text-sm'>{t('races.description')}</p>
            </div>
            <RacesList races={races} />
          </>
        )}
      />
    </div>
  );
};

export default Races;
