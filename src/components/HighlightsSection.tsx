import { cn } from '@/lib/utils';
import { HIGHLIGHT_ITEMS } from '@/lib/content';
import Button from './Button';
import HeadingTwo from './HeadingTwo';
import HighlightItem from './HighlightItem';

function HighlightsSection() {
  return (
    <div className="px-[15px] py-[40px]">
      <div
        className={cn(
          'mx-auto flex max-w-6xl flex-col gap-[30px] rounded-[16px] bg-[#153947] px-[15px] pt-[15px] pb-[30px] text-white',
          'lg:flex-row lg:items-center lg:justify-center',
          'lg:min-h-[380px] lg:bg-[url(@/static/illustrations/highlights-banner-lg.svg)] lg:bg-cover lg:bg-center lg:bg-no-repeat'
        )}
      >
        <div
          className={cn(
            'mx-auto flex h-[373px] w-full max-w-[300px] flex-col gap-[15px] rounded-[8px] bg-[#1E4959] px-[20px] py-[30px]',
            'bg-[url(@/static/illustrations/highlights-banner-sm.svg)] bg-cover bg-left-bottom bg-no-repeat',
            'sm:max-w-[649px] sm:gap-[40px] sm:pt-[76px] sm:pl-[292px]',
            'sm:bg-[url(@/static/illustrations/highlights-banner-md.svg)]',
            'lg:h-auto lg:w-[360px] lg:bg-transparent lg:bg-none lg:px-0 lg:pt-[20px] lg:pl-[130px]'
          )}
        >
          {HIGHLIGHT_ITEMS.map((item, idx) => (
            <HighlightItem {...item} key={idx} />
          ))}
        </div>
        <div
          className={cn(
            'flex flex-col gap-[30px]',
            'lg:w-[465px] lg:shrink-0 lg:gap-[50px] lg:pr-[15px]'
          )}
        >
          <HeadingTwo className={cn('text-center text-white', 'lg:text-left')}>
            We&apos;re redefining home <br className="hidden lg:block" />
            financing, <br className="lg:hidden" />
            with you in mind.
          </HeadingTwo>
          <div
            className={cn(
              'mx-auto flex w-full max-w-[390px] flex-col gap-[20px]',
              'lg:max-w-full lg:flex-row'
            )}
          >
            <Button>Buying A Home</Button>
            <Button variant="outline-primary">Refinancing A Mortgage</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightsSection;
