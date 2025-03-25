import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { lazy, Suspense } from 'react';

const Provider = lazy(() => import('provider'));

const App = () => {
  return (
    <div className="content">
      <ErrorBoundary fallback={<p>⚠️ Something went wrong</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <Provider />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
