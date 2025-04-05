import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/500-italic.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/600-italic.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/500-italic.css';
import './App.css';

const Provider = lazy(() => import('provider'));

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col text-center">
      <ErrorBoundary fallback={<p>⚠️ Something went wrong</p>}>
        <Suspense fallback={<p>Loading...</p>}>
          <Provider />
        </Suspense>
      </ErrorBoundary>
      <h1 className="mt-auto py-5 text-center text-3xl font-medium">
        I&apos;m the consumer app
      </h1>
    </div>
  );
};

export default App;
