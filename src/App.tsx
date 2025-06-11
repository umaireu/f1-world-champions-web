import { Suspense, type ErrorInfo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Route } from './route/route';
import { ErrorFallBack } from '@shared/components/ui/error-fallback/error-fallback';
import { logDetails } from '@shared/utils/utils';
import { Loader } from '@shared/components/ui/loader';

function App() {
  const onError = (error: Error, info: ErrorInfo) => {
    logDetails({ additionalArgs: [{ info }], message: error });
  };
  return (
    <ErrorBoundary FallbackComponent={ErrorFallBack} onError={onError}>
      <Suspense fallback={<Loader fullPage />}>
        <Route />
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
