import Image from 'next/image';
import Logo from '@/components/icons/Logo';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';

export default function PageHeader({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <div
        className={cn(
          'relative flex flex-col items-center space-y-8 rounded-lg border border-green-85 bg-green-95 p-8 laptop:space-y-14 laptop:p-20 desktop:space-y-20 desktop:rounded-xl desktop:p-24',
          children && 'rounded-b-none'
        )}
      >
        <div className='relative z-10 size-[62px] laptop:size-[68px] desktop:size-24'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className='rounded-[10px] border-4 border-white bg-gradient-to-b from-green-70 to-white p-3.5 desktop:rounded-xl desktop:p-5'
          >
            <Logo className='h-full w-full text-[#1A3129]' />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='space-y-1.5 laptop:space-y-2.5 desktop:space-y-5'
        >
          <h1 className='text-center text-3xl font-semibold text-grey-15 laptop:text-4xl desktop:text-5xl'>
            {title}
          </h1>
          <p className='text-center text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'>
            {description}
          </p>
        </motion.div>
        <Image
          src='/abstract-3.svg'
          alt='abstract'
          priority
          width={800}
          height={200}
          className='absolute top-0 left-1/2 -translate-x-1/2'
        />
      </div>
      <div className='rounded-lg rounded-t-none bg-dark-green-20 desktop:rounded-xl'>
        {children}
      </div>
    </section>
  );
}
