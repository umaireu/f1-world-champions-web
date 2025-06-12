import { Table, type TableColumn } from '@shared/components/ui/table/table';
import type { Race, WinnerDriver } from '@api-types/index';
import { Initials } from '@shared/components/ui/initials/initials';
import { useTranslation } from 'react-i18next';

type RacesListProps = {
  races: Race[];
};

export const RacesList = ({ races }: RacesListProps) => {
  const { t } = useTranslation();

  const columns: TableColumn<Race>[] = [
    {
      key: 'name',
      header: t('races.column.raceName'),
      accessor: 'name',
      render: (value: Race[keyof Race]) => {
        const _value = typeof value === 'string' ? value : '';
        return (
          <div className='text-base font-bold text-gray-900'>{_value}</div>
        );
      },
    },
    {
      key: 'circuitName',
      header: t('races.column.circuitName'),
      accessor: 'circuitName',
      render: (value: Race[keyof Race]) => {
        const _value = typeof value === 'string' ? value : '';
        return (
          <div className='text-base font-bold text-gray-900'>{_value}</div>
        );
      },
    },
    {
      key: 'date',
      header: t('races.column.date'),
      accessor: 'date',
      render: (value: Race[keyof Race]) => {
        const _value = typeof value === 'string' ? value : '';
        return (
          <div className='text-base font-bold text-gray-900'>{_value}</div>
        );
      },
    },
    {
      key: 'time',
      header: t('races.column.time'),
      accessor: 'time',
      render: (value: Race[keyof Race]) => {
        const _value = typeof value === 'string' ? value : '';
        return (
          <div className='text-base font-bold text-gray-900'>{_value}</div>
        );
      },
    },
    {
      key: 'winnerDriver',
      header: t('races.column.winnerDriver'),
      accessor: 'winnerDriver',
      render: (value: Race[keyof Race]) => {
        const driver = value as WinnerDriver;
        return (
          <div className='flex items-center space-x-3'>
            <Initials name={driver.name} />
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <div className='text-base font-bold text-gray-900'>
                  {driver.name}
                </div>
              </div>
              <div className='text-sm text-gray-500'>
                {t('seasons.driverChampion')}
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  const getRowClassName = (race: Race): string => {
    // Highlight championship-winning race rows with a golden/yellow background
    return race.isChampion
      ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-400 hover:from-yellow-100 hover:to-amber-100'
      : '';
  };

  return (
    <Table<Race>
      loading={false}
      data={races}
      columns={columns}
      emptyMessage={t('races.noData')}
      aria-label={t('races.labelA11y')}
      className='rounded-t-none'
      headerClassName='border-b-2 border-red-600'
      rowClassName={getRowClassName}
      loaderMessage={t('races.loading')}
      loaderSubMessage={t('races.loadingSubText')}
    />
  );
};
