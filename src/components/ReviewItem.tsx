import { ReviewItemProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { StarIcon } from '@heroicons/react/24/solid';
import { useMemo } from 'react';

function ReviewItem(props: ReviewItemProps) {
  const { id, reviewerName, starRating, timeAgo, comment } = props;
  const initials = useMemo(() => {
    const nameParts = reviewerName.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];
    const initials =
      firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

    return initials;
  }, [reviewerName]);

  return (
    <div
      className={cn(
        'mx-auto flex max-w-[321px] flex-col gap-[30px] rounded-br-[8px] rounded-bl-[8px] border border-t-[4px] border-[#F2F2F2] p-[15px]',
        '[box-shadow:0px_10px_15px_0px_rgba(152,_152,_154,_0.10)]'
      )}
    >
      <p
        className={cn(
          'line-clamp-3 h-[72px] text-[16px] leading-[24px] text-[#505050]'
        )}
        title={comment}
      >
        {comment}
      </p>
      <div className="flex gap-[10px]">
        <div
          className={cn(
            'flex h-[40px] w-[40px] items-center justify-center rounded-full font-medium text-white',
            {
              'bg-[#FFCE5B]': id % 3 === 0,
              'bg-[#FFB6C1]': id % 3 === 1,
              'bg-[#ADD8E6]': id % 3 === 2,
              'bg-[#F2F2F2]': id % 3 === 3,
            }
          )}
        >
          {initials}
        </div>
        <div>
          <div>{reviewerName}</div>
          <div className="flex items-center gap-[10px] text-[12px] leading-[18px] text-[#999999]">
            <span className="inline-flex items-center gap-[2px]">
              {Array.from({ length: starRating }, (_, idx) => (
                <StarIcon
                  key={idx}
                  className="h-[12px] w-[12px] text-[#FFCE5B]"
                />
              ))}
            </span>
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
