import { Button } from '@/components/ui/Button';
import { SlidingNumber } from '@/components/ui/SlidingNumber';
import { Plan } from '@/lib/types/pricing';
import * as motion from 'motion/react-client';

interface PricingCardProps {
  index: number;
  plan: Plan;
  isYearly: boolean;
}

export function PricingCard({ index, plan, isYearly }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className='rounded-lg border border-green-90 bg-green-95 p-8 laptop:p-10 desktop:rounded-xl desktop:p-12'
    >
      <div className='mb-4'>
        <h3 className='text-xl font-semibold text-grey-15 laptop:text-2xl desktop:text-3xl'>
          {plan.title}
        </h3>
      </div>

      <p className='mb-6 text-sm text-grey-15 laptop:text-base desktop:text-lg'>
        {plan.description}
      </p>

      <div className='mb-6'>
        <div className='flex items-center gap-1'>
          <span className='inline-flex items-center text-4xl font-bold text-dark-green-25 laptop:font-semibold desktop:text-5xl'>
            $
            <SlidingNumber
              value={Number(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
            />
          </span>
          <span className='text-base font-medium text-grey-20'>/month</span>
        </div>
      </div>

      <Button className='w-full'>Choose Plan</Button>
    </motion.div>
  );
}
