import { cn } from '@/lib/utils';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import type { FeatureCardProps } from '@/lib/types';
import Button from './Button';

function FeatureCard(props: FeatureCardProps) {
  const { number, title, description, linkText, image } = props;

  return (
    <div
      className={cn(
        'flex h-full min-h-[435px] max-w-[300px] flex-col items-center gap-[15px] rounded-[16px] bg-[#F2F2F2] px-[20px] pt-[20px] text-center',
        'lg:min-h-[454px] lg:max-w-[321px]'
      )}
    >
      <h3 className="flex items-center gap-[10px] rounded-full bg-[#007C80] px-[28px] py-[10px]">
        <span className="text-[18px] leading-[27px] text-[#CCCCCC]">
          {number}
        </span>
        <span className="font-poppins text-[16px] leading-[24px] font-medium text-white">
          {title}
        </span>
      </h3>
      <p className="text-[#505050]">{description}</p>
      <Button variant="link-secondary">
        {linkText}
        <ChevronRightIcon className="w-[16px h-[16px]" />
      </Button>
      <div className="mt-auto">
        <img {...image} className={cn('h-[254px] w-auto')} />
      </div>
    </div>
  );
}

export default FeatureCard;
