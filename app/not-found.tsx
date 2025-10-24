import { Button } from '@/components/ui/Button';
import { DotPattern } from '@/components/ui/DotPattern';
import Logo from '@/components/icons/Logo';
import { cn } from '@/lib/utils';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className='container mx-auto min-h-[calc(100vh-200px)] py-12 laptop:py-20 desktop:py-24'>
      <div className='relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-green-85 bg-green-95 p-8 laptop:p-20 desktop:rounded-xl desktop:p-24'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <DotPattern
            className={cn(
              'absolute top-0 left-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)] text-green-85'
            )}
          />
        </motion.div>

        <Image
          src='/abstract-3.svg'
          alt='abstract'
          priority
          width={800}
          height={200}
          className='absolute top-0 left-1/2 -translate-x-1/2 opacity-50'
        />

        <div className='relative z-10 flex flex-col items-center space-y-8 laptop:space-y-12 desktop:space-y-16'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='size-[80px] laptop:size-[100px] desktop:size-[120px]'
          >
            <div className='rounded-[10px] border-4 border-white bg-gradient-to-b from-green-70 to-white p-4 desktop:rounded-xl desktop:p-6'>
              <Logo className='h-full w-full text-[#1A3129]' />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-2 text-center laptop:space-y-3 desktop:space-y-4'
          >
            <h1 className='text-7xl font-bold text-grey-15 laptop:text-8xl desktop:text-9xl'>
              404
            </h1>
            <h2 className='text-2xl font-semibold text-grey-15 laptop:text-3xl desktop:text-4xl'>
              Page Not Found
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='max-w-2xl text-center text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'
          >
            Oops! The page you&apos;re looking for seems to have wandered off
            our nutrition plan. Don&apos;t worry though - we&apos;ll help you
            get back on track to achieving your health and wellness goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='flex flex-col gap-4 laptop:flex-row'
          >
            <Button asChild>
              <Link href='/'>Go Back Home</Link>
            </Button>
            <Button variant='outline' asChild>
              <Link href='/about'>Learn About Us</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='pt-8 text-center laptop:pt-12'
          >
            <p className='mb-4 text-sm font-medium text-grey-20 laptop:text-base'>
              Need help? Here are some quick links:
            </p>
            <div className='flex flex-wrap justify-center gap-4 text-sm font-semibold text-green-70 laptop:gap-6 laptop:text-base'>
              <Link
                href='/team'
                className='transition-colors hover:text-green-75'
              >
                Our Team
              </Link>
              <span className='text-grey-30'>•</span>
              <Link
                href='/#features'
                className='transition-colors hover:text-green-75'
              >
                Features
              </Link>
              <span className='text-grey-30'>•</span>
              <Link
                href='/#pricing'
                className='transition-colors hover:text-green-75'
              >
                Pricing
              </Link>
              <span className='text-grey-30'>•</span>
              <Link
                href='/#testimonials'
                className='transition-colors hover:text-green-75'
              >
                Testimonials
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
