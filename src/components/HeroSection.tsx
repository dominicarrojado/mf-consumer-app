import Balancer from 'react-wrap-balancer';
import { cn } from '@/lib/utils';
import Button from './Button';

function HeroSection() {
  return (
    <div className="p-[15px]">
      <div
        className={cn(
          'mx-auto h-[580px] w-full max-w-[1435px] rounded-[20px] bg-[url(@/static/images/hero-banner-sm.png)] bg-cover bg-center bg-no-repeat px-[15px] pt-[50px] pb-[30px]',
          'md:h-[540px] md:bg-[url(@/static/images/hero-banner-md.png)] md:px-[20px]',
          'lg:bg-[url(@/static/images/hero-banner-lg.png)]',
          'lg:px-[50px] lg:pt-[150px]'
        )}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col">
          <div className="flex flex-col gap-[10px] text-white">
            <h1
              className={cn(
                'font-poppins max-w-[500px] text-[30px] leading-[45px] font-semibold',
                'lg:text-[40px] lg:leading-[60px]'
              )}
            >
              <Balancer>Find the right mortgage for your dream home</Balancer>
            </h1>
            <p
              className={cn(
                'font-poppins max-w-[290px] text-[14px] leading-[21px] font-medium'
              )}
            >
              <Balancer>
                Make the right home loan decision with our smart tools and
                expert guidance
              </Balancer>
            </p>
          </div>
          <div
            className={cn(
              'mt-auto flex flex-col gap-[15px]',
              'md:mt-[50px] md:flex-row! md:gap-[20px]'
            )}
          >
            <Button className={cn('w-full', 'md:w-fit!')}>Buying A Home</Button>
            <Button
              variant="outline-primary"
              className={cn('w-full', 'md:w-fit!')}
            >
              Refinancing A Mortgage
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
