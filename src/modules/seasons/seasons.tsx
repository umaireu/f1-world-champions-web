import { Loader } from '@shared/components/ui/loader/loader';
import { SeasonsList } from './components/seasons-list/seasons-list';
import { useTranslation } from 'react-i18next';

const Seasons = () => {
  const { t } = useTranslation();

  const seasonData = {
    season: '2007',
    points: '110',
    championDriver: {
      driverId: 'raikkonen',
      name: 'Kimi Räikkönen',
    },
    championConstructor: {
      constructorId: 'ferrari',
      name: 'Ferrari',
    },
  };

  // Create an array of sample seasons for the table
  const seasonsArray = Array(12)
    .fill(null)
    .map((_, index) => ({
      ...seasonData,
      season: (2007 + index).toString(),
    }));
  const loading = false;

  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <div className='bg-gradient-to-r from-black to-gray-800 px-6 py-4 rounded-t-xl'>
          <h2 className='text-xl font-bold text-white'>{t('seasons.title')}</h2>
          <p className='text-gray-300 text-sm'>{t('seasons.description')}</p>
        </div>
        {loading ? (
          <div className={`bg-white rounded-xl shadow-lg overflow-hidden`}>
            <Loader
              message={t('seasons.loading')}
              subMessage={t('seasons.loadingSubText')}
            />
          </div>
        ) : (
          <SeasonsList seasons={seasonsArray} />
        )}
      </div>
    </>
  );
};

export default Seasons;
