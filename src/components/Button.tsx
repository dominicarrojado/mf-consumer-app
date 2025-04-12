import { cn } from '@/lib/utils';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

import { Button as HeadlessButton } from '@headlessui/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline-primary' | 'link-secondary';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, className, variant = 'primary', ...otherProps } = props;

  return (
    <HeadlessButton
      {...otherProps}
      ref={ref}
      className={cn(
        'inline-flex cursor-pointer items-center justify-center gap-[5px] rounded-lg px-[20px] py-[8px] text-[16px] leading-[24px] font-medium transition-colors',
        {
          'active:bg-[#B02E24]" bg-[#E03C31] text-white hover:bg-[#C83529] active:bg-[#B02E24]':
            variant === 'primary',
          'border border-[#E03C31] bg-white text-[#E03C31] hover:bg-[#FFEEED] active:bg-[#FFD9D7]':
            variant === 'outline-primary',
          'text-[#505050] hover:text-[#2C2C2C] active:text-black':
            variant === 'link-secondary',
        },
        className
      )}
    >
      {children}
    </HeadlessButton>
  );
});

Button.displayName = 'Button';

export default Button;
