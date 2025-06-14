import { IS_DEV_ENV } from '@utils/constants';
import { logDetails } from '@utils/utils';
import type { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Button } from '../button/button';

export const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { t } = useTranslation();

  if (IS_DEV_ENV) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    logDetails({ message: error });
  }

  const handleReload = () => {
    resetErrorBoundary();
    window.location.reload();
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md mx-auto text-center'>
        <div className='mb-8'>
          <p className='text-4xl font-bold text-black'>
            {t('errorFallback.title')}
          </p>
        </div>

        <div className='mb-8'>
          <p className='text-2xl font-semibold text-gray-800 mb-4'>
            {t('errorFallback.description')}
          </p>
          <p className='text-gray-600 mb-6'>{t('pageNotFound.description')}</p>
        </div>
        <Button onClick={handleReload} variant='primary'>
          {t('errorFallback.reload')}
        </Button>
      </div>
    </div>
  );
};
