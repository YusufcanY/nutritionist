'use client';

import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { PricingCard } from './PricingCard';
import * as motion from 'motion/react-client';
import { useState } from 'react';
import { Plan } from '@/lib/types/pricing';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const plans: Plan[] = [
    {
      title: 'Basic Plan',
      description:
        'Get started on your health journey with our Basic Plan. It includes personalized nutrition coaching, access to our app, meal planning assistance, and email support.',
      monthlyPrice: '49',
      yearlyPrice: '25',
    },
    {
      title: 'Premium Plan',
      description:
        "Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan, you'll receive video consultations, priority support, and personalized recipe recommendations.",
      monthlyPrice: '79',
      yearlyPrice: '39',
    },
    {
      title: 'Ultimate Plan',
      description:
        'Experience the full benefits of personalized nutrition coaching with our Ultimate Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and exclusive workshops.',
      monthlyPrice: '99',
      yearlyPrice: '49',
    },
  ];
  return (
    <section>
      <div className='container mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='text-center text-3xl font-bold text-grey-15 laptop:text-4xl desktop:text-5xl'
        >
          Our Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='text-center text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'
        >
          We outline our flexible and affordable options to support you on your
          journey to optimal health and nutrition. We believe that everyone
          deserves access to personalized nutrition guidance and resources
        </motion.p>
        <div className='mt-12 flex justify-center laptop:mt-14 desktop:mt-20'>
          <div className='rounded-lg border border-green-80 p-2'>
            <AnimatedBackground
              defaultValue='monthly'
              onValueChange={value => setIsYearly(value === 'yearly')}
              className='rounded-md bg-dark-green-20'
              transition={{
                type: 'tween',
                duration: 0.1,
                ease: 'linear',
              }}
            >
              {['monthly', 'yearly'].map(tab => (
                <button
                  key={tab}
                  data-id={tab}
                  type='button'
                  className='relative px-6 py-2 font-semibold text-grey-30 capitalize data-[checked=true]:text-white'
                >
                  {tab}
                  {tab === 'yearly' && (
                    <div className='absolute top-0 right-0 flex translate-x-1/2 -translate-y-2/3 flex-col items-center justify-center -space-y-2 rounded-sm bg-dark-green-30 p-0.5 text-green-70 shadow'>
                      <span className='text-xs'>SAVE</span>
                      <span className='text-base font-black'>50%</span>
                      {/* <span className='text-xs'>YEARLY</span> */}
                    </div>
                  )}
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-5 laptop:mt-10 laptop:grid-cols-3 desktop:mt-12 desktop:gap-7'>
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              plan={plan as Plan}
              isYearly={isYearly}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
