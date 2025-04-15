import { cn } from '@/lib/utils';
import type { HTMLProps } from 'react';

function Container(props: HTMLProps<HTMLDivElement>) {
  const { children, className, ...otherProps } = props;

  return (
    <div className="w-full px-[15px]">
      <div
        {...otherProps}
        className={cn('mx-auto w-full max-w-5xl', className)}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
