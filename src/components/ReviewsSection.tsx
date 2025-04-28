import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { StarIcon } from '@heroicons/react/24/solid';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import poweredByGoogleLogo from '@/static/logos/powered-by-google.png';
import poweredByGoogle2xLogo from '@/static/logos/powered-by-google@2x.png';
import { cn } from '@/lib/utils';
import { REVIEW_ITEMS } from '@/lib/content';
import { BREAKPOINT_LG, BREAKPOINT_MD } from '@/lib/constants';
import HeadingTwo from './HeadingTwo';
import Button from './Button';
import ReviewItem from './ReviewItem';

function ReviewsSection() {
  const rating = 5;

  return (
    <div className="overflow-hidden">
      <div className="lg:-mx-[15px] lg:px-[30px]">
        <div
          className={cn(
            'flex flex-col gap-[30px] py-[30px]',
            'lg:mx-auto lg:grid lg:max-w-5xl lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_auto_1fr] lg:[grid-template-areas:_"title_button"_"cards_cards"_"logo_logo"]'
          )}
        >
          <HeadingTwo
            className={cn(
              'text-center align-middle',
              'lg:text-left lg:[grid-area:title]'
            )}
          >
            Rated{' '}
            <span className="inline-flex translate-y-[5px]">
              {Array.from({ length: rating }, (_, idx) => (
                <StarIcon
                  key={idx}
                  className="h-[32px] w-[32px] text-[#FFCE5B]"
                />
              ))}
            </span>
            <span className="sr-only">{rating} stars</span>{' '}
            <br className="sm:hidden" />
            by our customers
          </HeadingTwo>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              [BREAKPOINT_MD]: {
                slidesPerView: 2,
              },
              [BREAKPOINT_LG]: {
                slidesPerView: 3,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className={cn(
              'mx-auto w-full max-w-2xl pb-[50px]!',
              'lg:max-w-5xl lg:[grid-area:cards]',
              '[&_.swiper-pagination-bullet]:mx-[3px]! [&_.swiper-pagination-bullet]:h-[6px]! [&_.swiper-pagination-bullet]:w-[6px]! [&_.swiper-pagination-bullet]:rounded-[8px]! [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-200',
              '[&_.swiper-pagination-bullet-active]:w-[22px]! [&_.swiper-pagination-bullet-active]:bg-[#007C80]!',
              '[&_.swiper-pagination-bullet-active]:bg-[#007C80]!'
            )}
            loop
          >
            {REVIEW_ITEMS.map((item) => (
              <SwiperSlide key={item.id}>
                <ReviewItem {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            className={cn(
              'text-center',
              'lg:-mt-[15px] lg:text-left lg:[grid-area:logo]'
            )}
          >
            <img
              src={poweredByGoogleLogo}
              srcSet={`${poweredByGoogle2xLogo} 2x, ${poweredByGoogleLogo} 1x`}
              alt="Powered by Google"
              className="inline-block h-[32px] w-auto"
            />
          </div>
          <div
            className={cn('text-center', 'lg:text-right lg:[grid-area:button]')}
          >
            <Button
              variant="outline-primary"
              className={cn(
                'border-transparent',
                'lg:bg-transparent! lg:px-0',
                'lg:hover:text-[#C83529] lg:active:text-[#B02E24]'
              )}
            >
              Check Out Our Reviews
              <ArrowTopRightOnSquareIcon className="h-[16px] w-[16px]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsSection;
