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
import PageHeaderLoading from './components/PageHeaderLoading';

const Provider = lazy(() => import('provider'));

const App = () => {
  return (
    <>
      <ErrorBoundary fallback={null}>
        <Suspense fallback={<PageHeaderLoading />}>
          <Provider />
        </Suspense>
      </ErrorBoundary>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-2 py-8 text-center">
        <h1 className="font-poppins my-10 text-3xl font-bold text-gray-900">
          I&apos;m the consumer app
        </h1>
      </div>
    </>
  );
};

export default App;
