import Image from 'next/image';
import Logo from '@/components/icons/Logo';
import { ReactNode } from 'react';

interface PageFooterProps {
  title: string;
  description: string;
  cta: ReactNode;
}

export default function PageFooter({
  title,
  description,
  cta,
}: PageFooterProps) {
  return (
    <div className='relative mt-12 flex flex-col items-center justify-between gap-5 overflow-hidden rounded-lg border border-green-85 bg-green-95 p-10 laptop:mt-24 laptop:flex-row laptop:p-14 desktop:mt-36 desktop:rounded-xl desktop:p-20'>
      <div className='relative z-10 flex flex-col gap-2 text-center laptop:max-w-2/3 laptop:text-left desktop:gap-3'>
        <h5 className='text-xl font-semibold text-grey-15 laptop:text-2xl desktop:text-3xl'>
          {title}
        </h5>
        <p className='text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'>
          {description}
        </p>
      </div>
      <div className='flex items-center justify-center'>{cta}</div>
      <div className='absolute top-0 left-0 -translate-x-1/3 -translate-y-1/2 rotate-[48deg]'>
        <Image src='/abstract-1.svg' alt='abstract' width={223} height={143} />
      </div>
      <div className='absolute right-0 bottom-0 translate-x-1/3 translate-y-1/2 text-green-90'>
        <Logo width={164} height={164} />
      </div>
    </div>
  );
}
