'use client';

import { Button } from '@/components/ui/Button';
import { DotPattern } from '@/components/ui/DotPattern';
import { cn, useIsLaptopOrLarger } from '@/lib/utils';
import Image from 'next/image';

export default function Hero() {
  const isLaptopOrLarger = useIsLaptopOrLarger();
  return (
    <section>
      <div className='grid grid-cols-2 laptop:gap-12'>
        <div className='relative col-span-2 grid place-content-center rounded-b-3xl bg-[#D5E6A9] pt-16 laptop:col-span-1 laptop:rounded-br-4xl laptop:rounded-bl-none laptop:pt-32'>
          <DotPattern
            className={cn(
              'absolute top-0 left-0 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)] text-grey-60'
            )}
          />
          <Image
            src='/hero-section-woman.png'
            alt='Hero'
            width={isLaptopOrLarger ? 400 : 300}
            height={isLaptopOrLarger ? 400 : 300}
            className='relative z-10'
          />
        </div>
        <div className='col-span-2 mx-auto flex max-w-3xl flex-col items-center justify-center laptop:col-span-1 laptop:mx-0 laptop:items-start'>
          <h4 className='border-b-4 border-green-70 pb-2 text-lg font-semibold text-dark-green-15 laptop:text-2xl desktop:text-3xl'>
            Transform Your ❤️ Health with
          </h4>
          <h1 className='mt-4 text-center text-4xl font-bold text-dark-green-15 laptop:text-left laptop:text-5xl desktop:text-6xl'>
            Personalized Nutrition Coaching
          </h1>
          <p className='mt-5 text-center text-sm font-medium laptop:text-left laptop:text-base desktop:text-lg'>
            Welcome to Nutritionist, your partner in achieving optimal health
            through personalized nutrition coaching. Our certified nutritionists
            are here to guide you on your weight loss journey, providing
            customized plans and ongoing support. Start your transformation
            today and experience the power of personalized nutrition coaching.
          </p>
          <div className='mt-12 flex gap-4'>
            <Button>Get Starter Today</Button>
            <Button variant='outline'>Book a Demo</Button>
          </div>
          <div className='relative z-20 order-first -mt-7 mb-8 flex flex-col items-center gap-2 laptop:order-none laptop:mt-12 laptop:mb-0 laptop:flex-row'>
            <div className='flex rounded-full border-2 border-green-70 bg-white p-1.5'>
              <img
                src='https://static.vecteezy.com/system/resources/previews/029/245/100/non_2x/photorealistic-image-of-a-beautiful-dark-skinned-african-american-woman-on-a-yellow-background-young-woman-smiling-ai-generated-photo.jpg'
                alt='person'
                className='size-10 rounded-full desktop:size-12'
              />
              <img
                src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4sCPHb8mnqfWVwsyyoztRg1HupvQ4qUvxVDC37e6Ymo8SyIxz'
                alt='person'
                className='-ml-4 size-10 rounded-full desktop:size-12'
              />
              <img
                src='https://cdn.prod.website-files.com/6470f3b555598689d525b4ad/6470f3b655598689d525b5c9_image-03.jpg'
                alt='person'
                className='-ml-4 size-10 rounded-full desktop:size-12'
              />
            </div>
            <span className='text-base font-bold text-dark-green-20 laptop:text-lg desktop:text-xl'>
              <span className='text-dark-green-40'>430+</span> Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
