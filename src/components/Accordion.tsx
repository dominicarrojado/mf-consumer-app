import { Fragment } from 'react';
import { AnimatePresence, easeOut, motion } from 'framer-motion';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useScrollHeight } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import type { AccordionProps } from '@/lib/types';

function Accordion(props: AccordionProps) {
  const { open, title, content, onClick } = props;
  const [ref, height] = useScrollHeight(open || false);

  return (
    <Disclosure as="div">
      <DisclosureButton
        className="flex w-full cursor-pointer gap-[30px] py-[15px] text-left"
        onClick={onClick}
      >
        <h3 className="font-poppins w-full text-[14px] leading-[21px] font-medium text-[#0E2638]">
          {title}
        </h3>
        <ChevronDownIcon
          className={cn(
            'mt-[2px] h-[16px] w-[16px] text-[#E03C31] transition-transform duration-200',
            { 'rotate-180': open }
          )}
        />
      </DisclosureButton>
      <div className="overflow-hidden">
        <AnimatePresence>
          <DisclosurePanel static as={Fragment}>
            <motion.div
              ref={ref}
              animate={{ height: height || '0' }}
              transition={{ duration: 0.2, ease: easeOut }}
              className="overflow-hidden text-[16px] leading-[24px] text-[#505050]"
              style={{ height }}
            >
              <div className="pr-[46px] pb-[15px]">{content}</div>
            </motion.div>
          </DisclosurePanel>
        </AnimatePresence>
      </div>
    </Disclosure>
  );
}

export default Accordion;
