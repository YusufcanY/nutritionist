import { ClipboardList, HeartPlus, Medal, TrendingUp } from 'lucide-react';
import FeatureCard from '../home/FeatureCard';
import * as motion from 'motion/react-client';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Logo from '@/components/icons/Logo';
import PageFooter from '@/components/PageFooter';

export default function Achievements() {
  const achievements = [
    {
      icon: <HeartPlus className='size-6 laptop:size-8 desktop:size-10' />,
      title: '10,000+ Transformations',
      description:
        'Our personalized nutrition plans have helped thousands of individuals reach their weight loss goals and maintain a healthy lifestyle.',
    },
    {
      icon: <TrendingUp className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Recognition for Excellence',
      description:
        'Nutritionist has been recognized as a leading provider of personalized nutrition coaching, receiving accolades for our innovative approach and commitment to client success.',
    },
    {
      icon: <Medal className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Positive Client Reviews',
      description:
        'We have received numerous testimonials from satisfied clients who have experienced significant improvements in their health, weight, and overall well-being through our coaching program.',
    },
    {
      icon: <ClipboardList className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Collaborate With Top Health Experts',
      description:
        'Nutritionist has established partnerships with respected nutritionists, dietitians, and health experts to ensure that our clients receive the highest quality guidance and support.',
    },
  ];
  return (
    <section>
      <div className='container mx-auto'>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center text-3xl font-bold text-grey-15 laptop:text-4xl desktop:text-5xl'
        >
          Company Achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'
        >
          At Nutritionist, we take pride in our accomplishments and the positive
          impact we have made on the lives of our clients. Here are some of our
          notable achievements
        </motion.p>
        <div className='mt-12 grid grid-cols-1 gap-4 laptop:mt-20 laptop:grid-cols-2 desktop:gap-8'>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <FeatureCard key={achievement.title} {...achievement} />
            </motion.div>
          ))}
        </div>
        <PageFooter
          title='We Are Proud of Our Achievements'
          description='But our ultimate satisfaction comes from seeing our clients achieve their goals and live healthier, happier lives. Join Nutritionist today and embark on your own transformative journey towards optimal health and well-being.'
          cta={<Button>Book a Demo</Button>}
        />
      </div>
    </section>
  );
}
