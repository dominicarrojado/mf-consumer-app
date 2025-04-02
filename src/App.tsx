import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { lazy, Suspense } from 'react';

const Provider = lazy(() => import('provider'));

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col text-center">
      <ErrorBoundary fallback={<p>⚠️ Something went wrong</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <Provider />
        </Suspense>
      </ErrorBoundary>
      <h1 className="mt-auto py-5 text-center text-3xl font-bold">
        I&apos;m the consumer app
      </h1>
    </div>
  );
};

export default App;
