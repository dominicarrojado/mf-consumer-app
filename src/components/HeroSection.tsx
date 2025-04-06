import Balancer from 'react-wrap-balancer';
import { cn } from '@/lib/utils';
import Button from './Button';

function HeroSection() {
  return (
    <div className="p-[15px]">
      <div
        className={cn(
          'mx-auto h-[580px] w-full max-w-[1435px] rounded-[20px] bg-[url(@/static/images/hero-banner-sm.png)] bg-cover bg-center bg-no-repeat px-[15px] pt-[50px] pb-[30px]',
          'sm:h-[540px] sm:bg-[url(@/static/images/hero-banner-md.png)] sm:px-[20px]',
          'lg:bg-[url(@/static/images/hero-banner-lg.png)]',
          'lg:pt-[150px] xl:px-[50px]'
        )}
      >
        <div
          className={cn(
            'mx-auto flex h-full w-full max-w-[682px] flex-col',
            'lg:max-w-5xl'
          )}
        >
          <div className="flex flex-col gap-[10px] text-white">
            <h1
              className={cn(
                'font-poppins max-w-[500px] text-[30px] leading-[45px] font-semibold',
                'sm:text-[40px] sm:leading-[60px]'
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
              'sm:mt-[50px] sm:flex-row! sm:gap-[20px]'
            )}
          >
            <Button className={cn('w-full', 'sm:w-fit!')}>Buying A Home</Button>
            <Button
              variant="outline-primary"
              className={cn('w-full', 'sm:w-fit!')}
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
