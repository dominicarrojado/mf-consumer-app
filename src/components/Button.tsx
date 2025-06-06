import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Button as HeadlessButton } from '@headlessui/react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  variant?:
    | 'primary'
    | 'info'
    | 'outline-primary'
    | 'outline-secondary'
    | 'link-secondary';
  href?: string;
  target?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { as, children, className, variant = 'primary', ...otherProps } = props;
  const Component = as || HeadlessButton;

  return (
    <Component
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
          'border border-[#505050] bg-white text-[#505050] hover:bg-[#F2F2F2] active:bg-[#E6E6E6]':
            variant === 'outline-secondary',
          'bg-[#455A64] text-white hover:bg-[#37474F] active:bg-[#263238]':
            variant === 'info',
        },
        className
      )}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
