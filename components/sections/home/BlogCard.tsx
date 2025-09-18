import { cn } from '@/lib/utils';
import { Heart, Bookmark } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  className?: string;
}

export default function BlogCard({
  title,
  description,
  category,
  author,
  date,
  readTime,
  image,
  className,
}: BlogCardProps) {
  return (
    <div
      className={cn(
        'group h-full overflow-hidden rounded-lg border border-green-85 bg-green-95 p-6 transition-all duration-300 hover:shadow-md laptop:p-7 desktop:rounded-xl desktop:p-10',
        className
      )}
    >
      <div className='relative overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='h-48 w-full rounded-lg object-cover transition-transform duration-300 laptop:h-64 laptop:rounded-xl desktop:h-96'
        />
      </div>
      <div className='mt-5 laptop:mt-10'>
        <span className='text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'>
          {category}
        </span>
        <h3 className='mb-5 text-lg font-semibold text-grey-15 laptop:mb-6 laptop:text-xl desktop:mb-7 desktop:text-2xl'>
          {title}
        </h3>
        <p className='mb-4 text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'>
          {description}
        </p>
        <div className='flex flex-col items-start justify-between gap-5 rounded-lg border border-green-90 bg-green-97 p-4 laptop:flex-row laptop:items-center laptop:gap-0 desktop:rounded-xl desktop:p-5'>
          <div className='flex w-full items-center gap-3'>
            <img
              src={author.avatar}
              alt={author.name}
              className='size-10 rounded-md object-cover laptop:size-12 laptop:rounded-lg desktop:size-14'
            />
            <div>
              <p className='text-sm font-semibold text-dark-green-15 laptop:text-base'>
                {author.name}
              </p>
              <div className='flex items-center gap-2 text-sm font-medium text-grey-35 laptop:text-base desktop:text-lg'>
                <span>{date}</span>
                <span>-</span>
                <span>{readTime}</span>
              </div>
            </div>
          </div>
          <div className='flex w-full justify-end gap-2 laptop:items-center'>
            <button className='flex size-12 items-center justify-center rounded-lg border border-green-90 bg-green-95 text-grey-30 transition-colors hover:bg-green-90 hover:text-grey-15 desktop:size-14'>
              <Heart className='size-4 laptop:size-5' />
            </button>
            <button className='flex size-12 items-center justify-center rounded-lg border border-green-90 bg-green-95 text-grey-30 transition-colors hover:bg-green-90 hover:text-grey-15 desktop:size-14'>
              <Bookmark className='size-4 laptop:size-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
