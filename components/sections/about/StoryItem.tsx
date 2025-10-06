import { Highlighter } from '@/components/ui/Highlighter';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface StoryItemProps {
  title: string;
  description: string;
  date: string;
  image: string;
  isImageOnRight?: boolean;
}

export default function StoryItem({
  title,
  description,
  date,
  image,
  isImageOnRight = false,
}: StoryItemProps) {
  return (
    <div className='grid grid-cols-1 laptop:grid-cols-2'>
      <div
        className={cn(
          'flex flex-col gap-5 bg-green-95 p-8 laptop:gap-8 laptop:p-14 desktop:gap-10 desktop:p-20',
          isImageOnRight && 'border-green-70 laptop:border-r-8'
        )}
      >
        <Highlighter
          action='underline'
          color='#CBEA7B'
          strokeWidth={3}
          animationDuration={1000}
          iterations={4}
        >
          <h4
            className={cn(
              'text-xl font-semibold text-dark-green-15 laptop:text-2xl desktop:text-3xl',
              isImageOnRight ? 'laptop:text-right' : 'text-left'
            )}
          >
            {title}
          </h4>
        </Highlighter>
        <p
          className={cn(
            'text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg',
            isImageOnRight ? 'laptop:text-right' : 'text-left'
          )}
        >
          {description}
        </p>
        <p
          className={cn(
            'text-sm font-semibold text-grey-20 laptop:text-base desktop:text-lg',
            isImageOnRight ? 'laptop:text-right' : 'text-left'
          )}
        >
          {date}
        </p>
      </div>
      <div
        className={cn(
          'relative min-h-52 overflow-hidden border-b-8 border-green-70 max-laptop:order-first laptop:border-b-0',
          !isImageOnRight && 'order-first laptop:border-r-8'
        )}
      >
        <Image src={image} alt={title} fill className='object-cover' />
      </div>
    </div>
  );
}
