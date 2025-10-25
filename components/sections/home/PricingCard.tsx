import { Button } from '@/components/ui/Button';
import { SlidingNumber } from '@/components/ui/SlidingNumber';
import { Plan } from '@/lib/types/pricing';
import { ShoppingBasket, ShoppingCart } from 'lucide-react';
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
      <div>
        <h3 className='text-xl font-semibold text-grey-15 laptop:text-2xl desktop:text-3xl'>
          {plan.title}
        </h3>
      </div>

      {typeof plan.description === 'string' ? (
        <p className='my-6 text-sm text-grey-15 laptop:my-8 laptop:text-base desktop:my-10 desktop:text-lg'>
          {plan.description}
        </p>
      ) : (
        <ul className='my-6 list-none divide-y divide-green-85 rounded-md border border-green-85 bg-green-90 laptop:my-8 laptop:rounded-lg desktop:my-10 desktop:rounded-xl'>
          {plan.description.map((item, index) => (
            <li
              key={index}
              className='text-medium px-4 py-3.5 text-sm text-grey-20 laptop:px-5 laptop:py-4 laptop:text-base desktop:px-6 desktop:py-5 desktop:text-lg'
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {plan.extra && (
        <div className='my-6 rounded-md bg-dark-green-20 px-4 py-3.5 text-sm text-white laptop:my-8 laptop:rounded-lg laptop:px-5 laptop:py-4 laptop:text-base desktop:my-10 desktop:rounded-xl desktop:px-6 desktop:py-5 desktop:text-lg'>
          {plan.extra}
        </div>
      )}

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

      <Button className='group w-full gap-0'>
        <span className='transition-transform group-hover:-translate-x-1'>
          Choose Plan
        </span>
        <ShoppingCart className='size-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100' />
      </Button>
    </motion.div>
  );
}
