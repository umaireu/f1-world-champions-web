import { useTranslation } from 'react-i18next';

export interface LoaderProps {
  message?: string;
  subMessage?: string;
  className?: string;
  textClassName?: string;
  subTextClassName?: string;
  fullPage?: boolean;
}

export const Loader = ({
  message = 'Loading...',
  subMessage,
  className = '',
  subTextClassName,
  textClassName,
  fullPage = false,
}: LoaderProps) => {
  const { t } = useTranslation();

  const containerClasses = fullPage
    ? `min-h-screen w-full flex flex-col items-center justify-center bg-white ${className}`
    : `flex flex-col items-center justify-center py-16 ${className}`;

  return (
    <div className={containerClasses} role='status'>
      <div
        className={`animate-spin rounded-full border-b-2 mb-4 border-red-600 h-12 w-12`}
        aria-hidden='true'
      />
      <p className={`text-gray-600 font-medium ${textClassName}`}>
        {message ?? t('loading')}
      </p>
      {subMessage && (
        <p className={`text-gray-400 mt-1 ${subTextClassName}`}>{subMessage}</p>
      )}
    </div>
  );
};
