'use client';

import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { PricingCard } from '@/components/sections/home/PricingCard';
import { useState } from 'react';
import { Plan } from '@/lib/types/pricing';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const plans: Plan[] = [
    {
      title: 'Basic Plan',
      description: [
        'Personalized nutrition plan tailored to your goals and dietary preferences.',
        'Access to our mobile app for convenient meal tracking and progress monitoring.',
        'Email support to address your questions and concerns.',
        'Regular check-ins with a dedicated nutritionist to review your progress and provide guidance.',
      ],
      monthlyPrice: '49',
      yearlyPrice: '25',
    },
    {
      title: 'Premium Plan',
      description: [
        'All the features included in the Basic Plan.',
        'One-on-one video consultations with your dedicated nutritionist for more personalized guidance and support.',
        'Recipe recommendations and meal planning assistance.',
        'Priority email support for quicker responses to your inquiries.',
        'Educational resources and guides to deepen your understanding of nutrition and healthy habits.',
      ],
      monthlyPrice: '79',
      yearlyPrice: '39',
    },
    {
      title: 'Ultimate Plan',
      description: [
        'All the features included in the Premium Plan.',
        'Unlimited access to video consultations with your dedicated nutritionist for ongoing support and accountability.',
        'Advanced progress tracking tools to monitor your weight, body measurements, and fitness goals.',
        'Customized meal plans and recipe suggestions based on your preferences and nutritional needs.',
        'Priority email and phone support for immediate assistance.',
      ],
      extra:
        'The Premium Plan is designed for individuals who are committed to achieving significant results and require the highest level of support and personalization.',
      monthlyPrice: '99',
      yearlyPrice: '49',
    },
  ];
  return (
    <section>
      <div className='container mx-auto'>
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
                    </div>
                  )}
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-5 laptop:mt-10 laptop:grid-cols-3 desktop:mt-12 desktop:gap-7'>
          {plans.map((plan, index) => (
            <div key={plan.title} className='flex items-start'>
              <PricingCard
                plan={plan as Plan}
                isYearly={isYearly}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
