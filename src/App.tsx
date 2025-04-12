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
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import PageHeaderFallback from './components/PageHeaderFallback';
import HeroSection from './components/HeroSection';
import AdUnit from './components/AdUnit';
import BenefitsSection from './components/BenefitsSection';
import BanksSection from './components/BanksSection';
import OnboardingSection from './components/OnboardingSection';
import FeaturesSection from './components/FeaturesSection';
import CallToActionSection from './components/CallToActionSection';

const Provider = lazy(() => import('provider'));

const App = () => {
  return (
    <>
      <ErrorBoundary fallback={<PageHeaderFallback />}>
        <Suspense fallback={<PageHeaderFallback />}>
          <Provider />
        </Suspense>
      </ErrorBoundary>
      <HeroSection />
      <AdUnit className="mt-[35px] mb-[20px]" />
      <BenefitsSection />
      <BanksSection />
      <OnboardingSection />
      <FeaturesSection />
      <CallToActionSection />
    </>
  );
};

export default App;
