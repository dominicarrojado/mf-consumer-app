import { ArticleItemProps } from '@/lib/types';
import { cn } from '@/lib/utils';
import { ListBulletIcon } from '@heroicons/react/24/outline';

function ArticleItem(props: ArticleItemProps) {
  const { url, title, image, type, date } = props;

  return (
    <a
      className={cn(
        'flex w-full cursor-pointer overflow-hidden rounded-[8px] border border-[#F2F2F2]',
        'lg:flex-col'
      )}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={image}
        className={cn(
          'h-[100px] w-[100px] shrink-0 object-cover',
          'lg:h-[120px] lg:w-auto'
        )}
      />
      <div
        className={cn(
          'flex flex-col gap-[10px] bg-white p-[15px]',
          'lg:gap-[15px] lg:px-[10px] lg:py-[20px]'
        )}
      >
        <h3
          className={cn(
            'font-poppins line-clamp-2 h-[42px] text-[14px] leading-[21px] text-[#0E2638]',
            'lg:line-clamp-3 lg:h-[63px]'
          )}
        >
          {title}
        </h3>
        <div className="flex items-center gap-[10px] text-[12px] leading-[18px] text-[#999999]">
          <div className="flex items-center gap-[5px]">
            <ListBulletIcon className="h-[16px] w-[16px]" />
            <div>{type}</div>
          </div>
          <div>•</div>
          <div>{date}</div>
        </div>
      </div>
    </a>
  );
}

export default ArticleItem;
