import { cn } from '@/lib/utils';
import type { OnboardingCardProps } from '@/lib/types';

function OnboardingCard(props: OnboardingCardProps) {
  const {
    children,
    id,
    title,
    options,
    value: selectedValue,
    onChange,
  } = props;

  return (
    <div className="flex w-full flex-col gap-[20px] rounded-[10px] border-[1px] border-[#CCCCCC] bg-white p-[15px]">
      <h3 className="rounded-[8px] bg-[#F2F2F2] p-[10px] text-[16px] leading-[24px] font-medium">
        {title}
      </h3>
      {children}
      {options?.map((option) => {
        const { value } = option;
        const inputId = `${id}-${value}`;

        return (
          <label
            key={inputId}
            htmlFor={inputId}
            className={cn(
              'flex cursor-pointer items-center gap-[15px] rounded-[8px] border-[1px] border-[#F2F2F2] bg-white p-[15px]',
              'transition-all duration-200',
              'hover:border-[#505050]'
            )}
          >
            <input
              id={inputId}
              type="radio"
              className="peer absolute h-0 w-0 cursor-pointer opacity-0"
              name={id}
              value={value}
              checked={value === selectedValue}
              onChange={() => onChange?.(option.value)}
            />
            <span
              className={cn(
                'relative h-[20px] w-[20px] shrink-0 rounded-full border-[2px] border-[#505050]',
                'after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:m-auto after:h-0 after:w-0 after:rounded-full after:bg-[#505050] after:content-[""]',
                'after:transition-all after:duration-200',
                'peer-checked:after:h-[10px] peer-checked:after:w-[10px]'
              )}
            />
            <span className="text-[16px] leading-[24px] font-medium text-[#505050] select-none">
              {option.label}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default OnboardingCard;
