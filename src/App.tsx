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
import HeroSection from './components/HeroSection';

const Provider = lazy(() => import('provider'));

const App = () => {
  return (
    <>
      <ErrorBoundary fallback={null}>
        <Suspense fallback={<PageHeaderLoading />}>
          <Provider />
        </Suspense>
      </ErrorBoundary>
      <HeroSection />
    </>
  );
};

export default App;
