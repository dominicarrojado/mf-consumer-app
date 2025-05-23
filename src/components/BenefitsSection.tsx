import bannerImage from '@/static/images/benefits-banner.jpg';
import bannerVideo from '@/static/videos/benefits-banner.mp4';
import { cn } from '@/lib/utils';
import { BENEFIT_ITEMS } from '@/lib/content';
import BenefitItem from './BenefitItem';
import HeadingTwo from './HeadingTwo';
import Container from './Container';

function BenefitsSection() {
  return (
    <Container
      className={cn(
        'mx-auto flex max-w-5xl flex-col gap-[30px] py-[30px]',
        'lg:grid lg:grid-cols-[auto_auto] lg:grid-rows-[auto_1fr] lg:justify-between lg:[grid-template-areas:_"title_media"_"benefits_media"]'
      )}
    >
      <HeadingTwo
        className={cn(
          'text-center',
          'lg:min-w-[448px] lg:justify-self-center lg:text-left lg:[grid-area:title]'
        )}
      >
        Home loans, <br className="sm:hidden lg:block" />
        the smarter way
      </HeadingTwo>
      <div
        className={cn(
          'flex h-[330px] w-full justify-center overflow-hidden rounded-[16px] bg-[#f2f2f2]',
          'lg:h-[500px] lg:w-[500px] lg:[grid-area:media]'
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
    </Container>
  );
}

export default BenefitsSection;
