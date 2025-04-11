import { cn } from '@/lib/utils';
import type { HTMLProps } from 'react';

function HeadingTwo(props: HTMLProps<HTMLHeadingElement>) {
  const { children, className, ...otherProps } = props;

  return (
    <h2
      {...otherProps}
      className={cn(
        'font-poppins text-[24px] leading-[36px] font-medium text-[#0E2638]',
        'lg:text-[30px] lg:leading-[45px]',
        className
      )}
    >
      {children}
    </h2>
  );
}

export default HeadingTwo;
