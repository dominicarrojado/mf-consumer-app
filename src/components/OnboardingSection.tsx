import { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Button as HeadlessButton } from '@headlessui/react';
import illustration from '@/static/illustrations/hdb-by-the-window.svg?inline';
import { cn } from '@/lib/utils';
import {
  PURCHASE_TIMELINE_QUESTION,
  SEARCH_STAGE_QUESTION,
} from '@/lib/content';
import { getOnboardingResult } from '@/lib/onboarding';
import Button from './Button';
import HeadingTwo from './HeadingTwo';
import OnboardingCard from './OnboardingCard';
import type { PurchaseTimeline, SearchStage } from '@/lib/enums';

function OnboardingSection() {
  const [searchStage, setSearchStage] = useState('');
  const [purchaseTimeline, setPurchaseTimeline] = useState('');
  const result = getOnboardingResult(
    searchStage as SearchStage,
    purchaseTimeline as PurchaseTimeline
  );
  const onReset = () => {
    setSearchStage('');
    setPurchaseTimeline('');
  };

  return (
    <div
      className={cn('bg-[#F2F2F2] px-[15px]', 'lg:bg-transparent lg:pb-[60px]')}
    >
      <div
        className={cn(
          'mx-auto max-w-6xl bg-[#F2F2F2] py-[30px]',
          'lg:rounded-[16px] lg:px-[30px]'
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-5xl flex-col items-center gap-[30px]',
            'lg:grid lg:grid-cols-[1fr_450px] lg:grid-rows-[auto_auto_1fr] lg:items-start lg:gap-0 lg:[grid-template-areas:_"image_cards"_"title_cards"_"button_cards"]'
          )}
        >
          <img
            src={illustration}
            alt="HDB flats by the window"
            className={cn(
              'inline-block h-[100px] w-[100px]',
              'lg:[grid-area:image]'
            )}
          />
          <HeadingTwo
            className={cn(
              'text-center',
              'lg:mt-[50px] lg:text-left lg:[grid-area:title]'
            )}
          >
            Discover your mortgage <br className="hidden lg:block" />
            options with us
          </HeadingTwo>
          <div
            className={cn(
              'mx-auto w-full max-w-[330px]',
              'lg:max-w-[450px] lg:[grid-area:cards]'
            )}
          >
            {!searchStage && (
              <OnboardingCard
                {...SEARCH_STAGE_QUESTION}
                value={searchStage}
                onChange={setSearchStage}
              />
            )}
            {searchStage && !result && (
              <OnboardingCard
                {...PURCHASE_TIMELINE_QUESTION}
                value={purchaseTimeline}
                onChange={setPurchaseTimeline}
              />
            )}
            {result && (
              <OnboardingCard title="Decide how much you can comfortably spend on a home.">
                <Button className="p-[15px]">{result.linkText}</Button>
                <Button
                  variant="outline-primary"
                  className="border-transparent"
                >
                  Consult An Expert
                </Button>
              </OnboardingCard>
            )}
          </div>
          {searchStage && (
            <div className={cn('mt-[30px]', 'lg:[grid-area:button]')}>
              <HeadlessButton
                className={cn(
                  'flex cursor-pointer items-center gap-[5px] px-[20px] py-[8px] text-[#505050]',
                  'transition-colors duration-200 hover:text-[#000000]',
                  'lg:px-0'
                )}
                onClick={onReset}
              >
                <ArrowPathIcon className="h-[18px] w-[18px]" />
                <span className="text-[16px] leading-[24px] font-medium">
                  Start Over
                </span>
              </HeadlessButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OnboardingSection;
