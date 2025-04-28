import { QUESTION_ITEMS } from '@/lib/content';
import Accordion from './Accordion';
import Container from './Container';
import HeadingTwo from './HeadingTwo';
import { useState } from 'react';
import { cn } from '@/lib/utils';

function QuestionsSection() {
  const [opened, setOpen] = useState(-1);

  return (
    <Container
      className={cn(
        'flex flex-col gap-[30px] pt-[35px] pb-[70px]',
        'lg:flex-row lg:gap-[80px] lg:py-[60px]'
      )}
    >
      <HeadingTwo
        className={cn('text-center', 'lg:min-w-[290px] lg:text-left')}
      >
        Frequently Asked Questions
      </HeadingTwo>
      <div>
        {QUESTION_ITEMS.map((item) => (
          <Accordion
            {...item}
            key={item.id}
            open={opened === item.id}
            onClick={() => setOpen(opened === item.id ? -1 : item.id)}
          />
        ))}
      </div>
    </Container>
  );
}

export default QuestionsSection;
