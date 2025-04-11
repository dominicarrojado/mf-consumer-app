import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Pagination } from 'swiper/modules';
import { BANK_ITEMS } from '@/lib/content';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { cn } from '@/lib/utils';
import { useWindowWidth } from '@/lib/hooks';
import { useMemo } from 'react';
import { BREAKPOINT_LG, BREAKPOINT_MD } from '@/lib/constants';

function BanksSection() {
  const windowWidth = useWindowWidth();
  const gridRows = useMemo(
    () => (windowWidth < BREAKPOINT_LG ? 2 : 1),
    [windowWidth]
  );
  const slidesPerView = useMemo(() => {
    if (windowWidth < BREAKPOINT_MD) {
      return 3;
    } else if (windowWidth < BREAKPOINT_LG) {
      return 4;
    } else {
      return 6;
    }
  }, [windowWidth]);

  return (
    <div className={cn('pt-[40px] pb-[60px]', 'lg:pb-[70px]')}>
      <h2 className="font-poppins px-[15px] text-center text-[14px] leading-[21px] font-medium text-[#0E2638]">
        We partner with all major banks in Singapore{' '}
        <br className="sm:hidden" />
        to bring you the best mortgage deals
      </h2>
      <Swiper
        slidesPerView={slidesPerView}
        grid={{ rows: gridRows }}
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
        loop={true}
      >
        {BANK_ITEMS.map((item) => (
          <SwiperSlide
            key={item.id}
            className="m-0! my-[12px] flex! items-center justify-center"
          >
            <img
              src={item.logo}
              alt={item.displayName}
              className={cn('h-[30px] w-auto select-none', 'lg:h-[40px]!')}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BanksSection;
