import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  image: string;
}

export default function TestimonialCard({
  quote,
  name,
  image,
}: TestimonialCardProps) {
  return (
    <div className='rounded-lg border border-green-90 bg-green-97 desktop:rounded-xl'>
      <div className='flex flex-col gap-10 p-6 laptop:p-8 desktop:gap-12 desktop:p-10'>
        <div>
          <Quote className='size-9 fill-dark-green-30 text-dark-green-30 desktop:size-10' />
        </div>

        <blockquote className='text-sm font-medium text-grey-30 laptop:text-base desktop:text-lg'>
          {quote}
        </blockquote>
      </div>

      <div className='flex items-center space-x-3 border-t border-green-90 px-6 py-5 laptop:px-8 laptop:py-5 desktop:px-10 desktop:py-8'>
        <div className='size-10 overflow-hidden rounded-md laptop:size-12 laptop:h-14 laptop:w-14 desktop:size-14 desktop:h-16 desktop:w-16 desktop:rounded-lg'>
          <img src={image} alt={name} className='h-full w-full object-cover' />
        </div>
        <h4 className='text-base font-semibold text-dark-green-15 desktop:text-lg'>
          {name}
        </h4>
      </div>
    </div>
  );
}
