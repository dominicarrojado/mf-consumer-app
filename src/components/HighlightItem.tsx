import { HighlightItemProps } from '@/lib/types';
import { cn } from '@/lib/utils';

function HighlightItem(props: HighlightItemProps) {
  const { icon, title, subtitle } = props;

  return (
    <div className="flex gap-[10px]">
      <img {...icon} className="h-[40px] w-[40px] flex-shrink-0" />
      <div className="flex-1">
        <h3 className={cn('leading-[1]')}>
          <span
            className={cn(
              'font-poppins text-[18px] leading-[1] font-medium text-[#9EE5E8]',
              'lg:text-[24px] lg:leading-[36px]'
            )}
          >
            {title}
          </span>
          <br className="leading-1" />
          <span className="font-sans text-[16px] leading-[24px] font-medium text-white">
            {subtitle}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default HighlightItem;
