import { useTranslation } from 'react-i18next';
import { ErrorDisplay } from '../ui/error/error';
import { Loader } from '../ui/loader';

export interface AsyncRendererProps<T> {
  loading: boolean;
  error: unknown;
  data: T | null;
  renderLoading?: () => React.ReactNode;
  renderError?: (error: unknown) => React.ReactNode;
  renderData?: (data: T) => React.ReactNode;
}

export const AsyncRenderer = <T,>({
  loading,
  error,
  data,
  renderLoading,
  renderError,
  renderData,
}: AsyncRendererProps<T>) => {
  const { t } = useTranslation();

  if (loading) {
    return (
      <>
        {renderLoading ? (
          renderLoading()
        ) : (
          <Loader
            message={t('seasons.loading')}
            subMessage={t('seasons.loadingSubText')}
          />
        )}
      </>
    );
  }

  if (error) {
    return (
      <>
        {renderError ? (
          renderError(error)
        ) : (
          <ErrorDisplay
            error={error}
            title={t('error.title')}
            message={t('error.message')}
            showRefresh
          />
        )}
      </>
    );
  }

  if (data && renderData) {
    return renderData(data);
  }

  return null;
};
