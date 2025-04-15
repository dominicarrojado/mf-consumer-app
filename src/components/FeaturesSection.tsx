import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { cn } from '@/lib/utils';
import { FEATURE_ITEMS } from '@/lib/content';
import FeatureCard from './FeatureCard';
import HeadingTwo from './HeadingTwo';
import Container from './Container';

function FeaturesSection() {
  return (
    <div className={cn('flex flex-col gap-[30px] pt-[70px]', 'lg:pt-[10px]')}>
      <Container>
        <HeadingTwo className={cn('text-center', 'lg:text-left')}>
          Crafted by experts, <br />
          fine-tuned with technology
        </HeadingTwo>
      </Container>
      <div className="lg:mx-[15px]">
        <Swiper
          slidesPerView="auto"
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={cn(
            'mx-auto w-full max-w-[960px] pb-[36px]!',
            '[&_.swiper-pagination-bullet]:mx-[3px]! [&_.swiper-pagination-bullet]:h-[6px]! [&_.swiper-pagination-bullet]:w-[6px]! [&_.swiper-pagination-bullet]:rounded-[8px]! [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-200',
            '[&_.swiper-pagination-bullet-active]:w-[22px]! [&_.swiper-pagination-bullet-active]:bg-[#007C80]!',
            'lg:max-w-5xl'
          )}
        >
          {FEATURE_ITEMS.map((item) => (
            <SwiperSlide
              key={item.id}
              className={cn(
                'ml-[15px] w-auto! last:mr-[15px]',
                'lg:mr-[30px] lg:ml-0 lg:last:mr-0'
              )}
            >
              <FeatureCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FeaturesSection;
