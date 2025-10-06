import { RippleBackground } from '@/components/ui/RippleBackground';
import Image from 'next/image';

export default function Welcome() {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='mt-8 mb-12 grid h-[106px] grid-cols-6 grid-rows-2 gap-1 laptop:my-20 laptop:h-[412px] laptop:gap-2.5 desktop:my-24 desktop:h-[518px] desktop:gap-5'>
          <div className='col-span-1 row-span-1 h-full w-full rounded-sm bg-[#DCF1A7] laptop:rounded-lg'></div>
          <div className='col-span-1 row-span-1 h-full w-full rounded-sm bg-[#DCF1A7] laptop:rounded-lg'></div>
          <div className='relative col-span-2 row-span-2 flex h-full w-full items-center justify-center overflow-hidden rounded-sm bg-[#DCF1A7] laptop:rounded-lg'>
            <Image
              src='/abstract-2.svg'
              alt='abstract logo'
              width={0}
              height={0}
              sizes='50vw'
              className='h-auto w-1/2'
            />
            <RippleBackground className='hidden laptop:block' />
            <RippleBackground
              className='block laptop:hidden'
              mainCircleSize={1}
              numCircles={4}
            />
          </div>
          <div className='col-span-1 row-span-1 h-full w-full rounded-sm bg-[#DCF1A7] laptop:rounded-lg'></div>
          <div className='col-span-1 row-span-1 h-full w-full rounded-sm bg-[#DCF1A7] laptop:rounded-lg'></div>
          <div className='col-span-1 row-span-1 h-full w-full rounded-sm bg-[#DCF1A7] laptop:rounded-lg'></div>
          <div className='col-span-1 row-span-1 h-full w-full rounded-sm bg-[#DCF1A7] laptop:rounded-lg'></div>
          <div className='col-span-1 row-span-1 h-full w-full rounded-sm bg-[#DCF1A7] laptop:rounded-lg'></div>
          <div className='col-span-1 row-span-1 h-full w-full rounded-sm bg-[#DCF1A7] laptop:rounded-lg'></div>
        </div>
        <div className='flex flex-col gap-5 rounded-lg border border-green-85 bg-green-95 p-8 text-center laptop:gap-10 laptop:p-20 desktop:gap-12 desktop:rounded-xl desktop:p-24'>
          <h1 className='text-3xl font-semibold laptop:text-4xl desktop:text-5xl'>
            Welcome to Nutritionist
          </h1>
          <p className='text-sm font-medium laptop:text-base desktop:text-lg'>
            Your trusted source for personalized nutrition coaching. Our mission
            is to help you achieve your weight loss and health goals through
            tailored nutrition plans and expert guidance. We understand that
            every individual is unique, and that&apos;s why we believe in
            providing personalized solutions that fit your lifestyle and
            preferences. With our team of qualified nutritionists and
            dietitians, we are dedicated to empowering you with the knowledge
            and tools you need to make lasting changes. Whether you want to shed
            those extra pounds, improve your overall well-being, or develop a
            healthier relationship with food, we are here to support you every
            step of the way. At Nutritionist, we believe that healthy eating
            should be enjoyable and sustainable. We emphasize the importance of
            balanced nutrition, focusing on whole foods and mindful eating
            practices. Our approach is rooted in scientific research and
            evidence-based strategies, ensuring that you receive the most
            up-to-date and accurate information. Join our community of
            individuals committed to transforming their lives through nutrition.
            Take control of your health, boost your energy levels, and discover
            the joy of nourishing your body with wholesome foods. We are here to
            guide you towards a healthier, happier you.
          </p>
        </div>
      </div>
    </section>
  );
}
