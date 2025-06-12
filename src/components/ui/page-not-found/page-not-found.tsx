import { Link } from 'react-router';
import { ROUTE_PATH } from '@routes/constants';
import { useTranslation } from 'react-i18next';

export const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md mx-auto text-center'>
        <div className='mb-8'>
          <h1 className='text-9xl font-bold text-gray-300'>404</h1>
        </div>

        <div className='mb-8'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
            {t('pageNotFound.title')}
          </h2>
          <p className='text-gray-600 mb-6'>{t('pageNotFound.description')}</p>
        </div>

        <div className='space-y-4'>
          <Link
            to={ROUTE_PATH.DEFAULT.href}
            className='inline-block text-white font-medium'>
            {t('pageNotFound.gotToHome')}
          </Link>
        </div>
      </div>
    </div>
  );
};
