import bannerImage from '@/static/images/benefits-banner.jpg';
import bannerVideo from '@/static/videos/benefits-banner.mp4';
import { cn } from '@/lib/utils';
import { BENEFIT_ITEMS } from '@/lib/content';
import BenefitItem from './BenefitItem';

function BenefitsSection() {
  return (
    <div className="px-[15px]">
      <div
        className={cn(
          'mx-auto flex max-w-2xl flex-col gap-[30px] py-[30px]',
          'lg:grid! lg:max-w-6xl lg:grid-cols-[1fr_500px] lg:grid-rows-[auto_1fr] lg:[grid-template-areas:_"title_media"_"benefits_media"]',
          'xl:gap-x-[64px]!'
        )}
      >
        <h2
          className={cn(
            'font-poppins text-center text-[24px] leading-[36px] font-medium text-[#0E2638]',
            'lg:min-w-[448px] lg:justify-self-center lg:text-left lg:text-[30px] lg:leading-[45px] lg:[grid-area:title]'
          )}
        >
          Home loans, <br className="sm:hidden lg:block" />
          the smarter way
        </h2>
        <div
          className={cn(
            'flex h-[330px] w-full justify-center overflow-hidden rounded-[16px] bg-[#f2f2f2]',
            'lg:h-[500px]! lg:w-[500px]! lg:[grid-area:media]'
          )}
        >
          <video
            src={bannerVideo}
            poster={bannerImage}
            controlsList="nofullscreen nodownload"
            className="h-full w-auto object-scale-down object-center"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div
          className={cn(
            'flex flex-col gap-[30px]',
            'lg:max-w-[448px] lg:justify-self-center lg:[grid-area:benefits]'
          )}
        >
          {BENEFIT_ITEMS.map((item) => (
            <BenefitItem {...item} key={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection;
