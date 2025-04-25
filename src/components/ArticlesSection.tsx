import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import { ARTICLE_ITEMS } from '@/lib/content';
import ArticleItem from './ArticleItem';
import Button from './Button';
import Container from './Container';
import HeadingTwo from './HeadingTwo';

function ArticlesSection() {
  return (
    <div className={cn('py-[35px]', 'lg:bg-[#FAFAFA] lg:py-[56px]')}>
      <Container
        className={cn(
          'flex flex-col gap-[30px]',
          'lg:grid! lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_auto_1fr] lg:[grid-template-areas:_"title_button"_"list_list"]'
        )}
      >
        <HeadingTwo
          className={cn('text-center', 'lg:text-left lg:[grid-area:title]')}
        >
          Learn more about home financing
        </HeadingTwo>
        <div
          className={cn(
            'flex flex-col gap-[15px]',
            'lg:flex-row! lg:justify-between lg:[grid-area:list]'
          )}
        >
          {ARTICLE_ITEMS.map((item) => (
            <ArticleItem {...item} key={item.id} />
          ))}
        </div>
        <div className="lg:text-right lg:[grid-area:button]">
          <Button
            as="a"
            href="https://www.propertyguru.com.sg/property-guides/home-financing-guides"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-primary"
            className={cn(
              'border-transparent bg-transparent! px-0',
              'hover:text-[#C83529] active:text-[#B02E24]'
            )}
          >
            Read More
            <ChevronRightIcon className="h-[16px] w-[16px]" />
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default ArticlesSection;
