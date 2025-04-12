import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import chatLogo from '@/static/logos/whatsapp.svg?inline';
import { cn } from '@/lib/utils';
import Button from './Button';

function CallToActionSection() {
  return (
    <div className={cn('px-[15px] pt-[15px] pb-[30px]', 'lg:pt-[30px]')}>
      <div
        className={cn(
          'mx-auto max-w-5xl rounded-[16px] border border-[#F2F2F2] p-[15px] text-center',
          'lg:flex lg:items-center lg:gap-[10px] lg:text-left'
        )}
      >
        <ChatBubbleOvalLeftEllipsisIcon
          className={cn(
            'inline-block h-[26px] w-[26px] text-[#007C80]',
            'lg:shrink-0'
          )}
        />
        <p
          className={cn(
            'font-poppins mt-[10px] text-[18px] leading-[27px] font-medium',
            'lg:mt-0 lg:flex-1'
          )}
        >
          Prefer to start with a chat? <br className="lg:hidden" />
          Let&apos;s talk.
        </p>
        <div
          className={cn(
            'mx-auto mt-[20px] flex max-w-[390px] flex-col gap-[15px]',
            'lg:mt-0 lg:flex-row-reverse!'
          )}
        >
          <Button variant="info">
            <img src={chatLogo} alt="WhatsApp" className="h-[20px] w-auto" />
            WhatsApp
          </Button>
          <Button
            variant="outline-secondary"
            className="lg:border-transparent!"
          >
            Get A Callback
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CallToActionSection;
