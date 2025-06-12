import { Suspense, type ErrorInfo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from '@tanstack/react-query';
import { Route } from './routes/route';
import { ErrorFallBack } from '@components/ui/error-fallback/error-fallback';
import { logDetails } from '@utils/utils';
import { Loader } from '@components/ui/loader';
import { queryClient } from './services/query/query.client';

function App() {
  const onError = (error: Error, info: ErrorInfo) => {
    logDetails({ additionalArgs: [{ info }], message: error });
  };
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={ErrorFallBack} onError={onError}>
        <Suspense fallback={<Loader fullPage />}>
          <Route />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
export default App;
