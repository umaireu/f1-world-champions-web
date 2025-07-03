import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { getErrorMessage, getErrorTitle } from '@utils/error-utils/error.utils';
import { Button } from '../button/button';

interface ErrorDisplayProps {
  error: unknown;
  title?: string;
  message?: string;
  showRefresh?: boolean;
  className?: string;
}

export const ErrorDisplay = ({
  error,
  title,
  message,
  showRefresh = false,
  className = '',
}: ErrorDisplayProps) => {
  const { t } = useTranslation();

  const errorMessage = message ?? getErrorMessage(error);
  const errorTitle = title ?? getErrorTitle(error);

  const refreshHandler = useCallback(() => window.location.reload(), []);

  return (
    <div
      role='alert'
      className={`bg-red-50 border border-red-200 rounded-lg p-6 ${className}`}>
      <div className='flex items-start'>
        <div className='ml-3 flex-1'>
          <strong className='text-sm font-medium text-red-800' id='error-title'>
            {errorTitle}
          </strong>
          <p
            id='error-message'
            aria-describedby='error-title'
            className='mt-1 text-sm text-red-700'>
            {errorMessage}
          </p>
          {showRefresh && (
            <div className='mt-4'>
              <Button
                onClick={refreshHandler}
                aria-label={t('button.refresh')}
                aria-describedby='error-message'
                className='bg-red-600 hover:bg-red-200 text-red-800 text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2'>
                <span aria-hidden='true'>{t('button.refresh')}</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
