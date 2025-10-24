import { DotPattern } from '@/components/ui/DotPattern';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
}
export default function TeamCard({ name, title, image }: TeamCardProps) {
  return (
    <div className='relative rounded-lg bg-green-70 desktop:rounded-xl'>
      <div className='relative'>
        <Image
          src={image}
          alt={name}
          width={0}
          height={0}
          sizes='100vw'
          loading='eager'
          className='relative z-10 h-auto max-h-[305px] w-full object-cover object-top'
        />
        <DotPattern
          className={cn(
            'absolute top-0 left-0 [mask-image:radial-gradient(175px_circle_at_center,white,transparent)] text-dark-green-60'
          )}
        />
      </div>
      <div className='absolute bottom-0 left-0 z-20 w-3/4 translate-y-1/2 space-y-0.5 rounded-tr-[20px] bg-green-95 p-5 desktop:space-y-1 desktop:p-8'>
        <h4 className='text-xl font-semibold text-grey-15 desktop:text-2xl'>
          {name}
        </h4>
        <p className='text-sm font-medium text-grey-30 laptop:text-base desktop:text-lg'>
          {title}
        </p>
      </div>
    </div>
  );
}
