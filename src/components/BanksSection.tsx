import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import { cn } from '@/lib/utils';
import { BANK_ITEMS } from '@/lib/content';
import { BREAKPOINT_MD, BREAKPOINT_SM } from '@/lib/constants';

function BanksSection() {
  return (
    <div className={cn('pt-[40px] pb-[60px]', 'lg:pb-[70px]')}>
      <h2 className="font-poppins px-[15px] text-center text-[14px] leading-[21px] font-medium text-[#0E2638]">
        We partner with all major banks in Singapore{' '}
        <br className="sm:hidden" />
        to bring you the best mortgage deals
      </h2>
      <Swiper
        slidesPerView={3}
        grid={{ rows: 2 }}
        breakpoints={{
          [BREAKPOINT_SM]: {
            slidesPerView: 4,
            grid: {
              rows: 1,
            },
          },
          [BREAKPOINT_MD]: {
            slidesPerView: 5,
            grid: {
              rows: 1,
            },
          },
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Grid, Pagination]}
        className={cn(
          'mx-auto mt-[20px] h-[120px] w-full max-w-2xl pb-[30px]!',
          'lg:mt-[15px] lg:h-[90px] lg:max-w-5xl',
          '[&_.swiper-pagination-bullet]:mx-[3px]! [&_.swiper-pagination-bullet]:h-[6px]! [&_.swiper-pagination-bullet]:w-[6px]!',
          '[&_.swiper-pagination-bullet-active]:bg-[#007C80]!'
        )}
        loop
      >
        {BANK_ITEMS.map((item) => (
          <SwiperSlide
            key={item.id}
            className="m-0! my-[12px] flex! items-center justify-center"
          >
            <img
              src={item.logo}
              alt={item.displayName}
              className={cn('h-[30px] w-auto select-none', 'lg:h-[40px]')}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BanksSection;
