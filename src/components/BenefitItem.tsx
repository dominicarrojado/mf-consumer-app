import { CheckCircleIcon } from '@heroicons/react/24/solid';
import type { BenefitItemProps } from '@/lib/types';

function BenefitItem(props: BenefitItemProps) {
  const { title, body } = props;

  return (
    <div className="flex w-full gap-[10px]">
      <CheckCircleIcon className="h-[26px] w-[26px] shrink-0 text-[#07A35D]" />
      <div className="flex flex-1 flex-col gap-[10px]">
        <h3 className="font-poppins text-[18px] leading-[27px] font-medium text-[#153947]">
          {title}
        </h3>
        <p className="text-[16px] leading-[24px] text-[#505050]">{body}</p>
      </div>
    </div>
  );
}

export default BenefitItem;
