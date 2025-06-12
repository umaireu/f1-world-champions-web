import { Table, type TableColumn } from '@components/ui/table/table';
import type {
  Season,
  ChampionDriver,
  ChampionConstructor,
} from '@api-types/index';
import { Initials } from '@components/ui/initials/initials';
import { Button } from '@components/ui/button/button';
import { useTranslation } from 'react-i18next';

type SeasonsListProps = {
  seasons: Season[];
  onViewDetails?: (season: Season) => void;
};
export const SeasonsList = ({ seasons, onViewDetails }: SeasonsListProps) => {
  const { t } = useTranslation();

  const columns: TableColumn<Season>[] = [
    {
      key: 'season',
      header: t('seasons.column.season'),
      accessor: 'season',
      isRowHeader: true,
      render: (value: Season[keyof Season]) => {
        const seasonValue = typeof value === 'string' ? value : '';
        return (
          <div className='flex items-center'>
            <div className='w-2 h-8 bg-red-600 rounded-full mr-3'></div>
            <div className='text-2xl font-bold text-gray-900'>
              {seasonValue}
            </div>
          </div>
        );
      },
    },
    {
      key: 'championDriver',
      header: t('seasons.column.driverChampion'),
      accessor: 'championDriver',
      render: (value: Season[keyof Season]) => {
        const driver = value as ChampionDriver;
        return (
          <div className='flex items-center space-x-3'>
            <Initials name={driver.name} />
            <div>
              <div className='text-base font-bold text-gray-900'>
                {driver.name}
              </div>
              <div className='text-sm text-gray-500'>
                {t('seasons.driverChampion')}
              </div>
            </div>
          </div>
        );
      },
    },
    {
      key: 'championConstructor',
      header: t('seasons.column.constructorChampion'),
      accessor: 'championConstructor',
      render: (value: Season[keyof Season]) => {
        const constructor = value as ChampionConstructor;
        return (
          <span className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 border border-gray-300'>
            {constructor.name}
          </span>
        );
      },
    },
    {
      key: 'points',
      header: t('seasons.column.points'),
      accessor: 'points',
      render: (value: Season[keyof Season]) => {
        const pointsValue = typeof value === 'string' ? value : '';
        return (
          <div>
            <div className='text-2xl font-bold text-red-600'>{pointsValue}</div>
            <div className='text-xs text-gray-500 uppercase tracking-wide'>
              {t('seasons.points')}
            </div>
          </div>
        );
      },
    },
    {
      key: 'actions',
      header: t('seasons.column.actions'),
      accessor: 'season',
      render: (_, row: Season) => {
        return (
          <Button
            onClick={() => onViewDetails?.(row)}
            variant='secondary'
            size='sm'
            aria-label={t('seasons.viewRaces')}
            className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>
            {t('seasons.viewRaces')}
          </Button>
        );
      },
    },
  ];

  return (
    <Table<Season>
      loading={false}
      data={seasons}
      columns={columns}
      emptyMessage={t('seasons.noData')}
      aria-label={t('seasons.labelA11y')}
      className='rounded-t-none'
      headerClassName='border-b-2 border-red-600'
      loaderMessage={t('seasons.loading')}
      loaderSubMessage={t('seasons.loadingSubText')}
    />
  );
};
