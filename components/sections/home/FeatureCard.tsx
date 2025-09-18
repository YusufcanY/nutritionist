import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        'h-full rounded-lg border border-green-85 bg-green-95 p-6 laptop:p-8 desktop:rounded-xl desktop:p-10',
        className
      )}
    >
      <div className='flex items-center gap-4'>
        <div className='mb-4 flex size-12 items-center justify-center rounded-lg bg-green-70 text-grey-15 laptop:size-14 desktop:size-16'>
          {icon}
        </div>
        <h3 className='mb-3 text-lg font-semibold text-grey-15 laptop:text-xl desktop:text-2xl'>
          {title}
        </h3>
      </div>
      <p className='text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'>
        {description}
      </p>
    </div>
  );
}
