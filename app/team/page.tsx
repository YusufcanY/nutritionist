'use client';

import PageFooter from '@/components/PageFooter';
import PageHeader from '@/components/PageHeader';
import TeamCard from '@/components/sections/team/TeamCard';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import * as motion from 'motion/react-client';

export default function Team() {
  const sectors = [
    'Management Team',
    'Nutritionists and Dietitians',
    'Customer Support',
    'Marketing and Communications',
    'Technology and Development',
  ];
  const [, setSelectedSector] = useState<string>('Management Team');
  const team = [
    {
      name: 'Sarah Mitchell',
      title: 'Founder and CEO',
      image: '/team/woman-1.png',
    },
    {
      name: 'Yusufcan Yilmaz',
      title: 'Chief Operating Officer',
      image: '/team/man-2.png',
    },
    {
      name: 'John Davis',
      title: 'Chief Financial Officer',
      image: '/team/man-1.png',
    },
    {
      name: 'Rachel Adams',
      title: 'Chief Marketing Officer',
      image: '/team/woman-2.webp',
    },
  ];
  return (
    <>
      <main className='container mx-auto space-y-12 py-12 laptop:space-y-24 laptop:py-20 desktop:space-y-36 desktop:py-24'>
        <PageHeader
          title='Meet Our Team of Experts'
          description='Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.'
        >
          <div className='no-scrollbar flex overflow-x-scroll p-5 laptop:px-20 laptop:py-6 desktop:px-36 desktop:py-8'>
            <AnimatedBackground
              defaultValue='Management Team'
              onValueChange={value =>
                setSelectedSector(value || 'Management Team')
              }
              className='rounded-md border border-dark-green-30 bg-dark-green-25 desktop:rounded-lg'
              transition={{
                type: 'tween',
                duration: 0.3,
                ease: 'linear',
              }}
            >
              {sectors.map(tab => (
                <button
                  key={tab}
                  data-id={tab}
                  type='button'
                  className='relative cursor-pointer px-4 py-3 font-semibold text-nowrap text-grey-90 capitalize transition-colors data-[checked=true]:text-white desktop:px-5 desktop:py-3.5'
                >
                  {tab}
                </button>
              ))}
            </AnimatedBackground>
          </div>
        </PageHeader>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='grid grid-cols-1 gap-16 pb-12 laptop:grid-cols-4 laptop:gap-5 laptop:pb-24 desktop:gap-8 desktop:pb-36'
        >
          {team.map(member => (
            <TeamCard
              key={member.name}
              name={member.name}
              title={member.title}
              image={member.image}
            />
          ))}
        </motion.div>
        <PageFooter
          title='Join Our Team'
          description='We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals.'
          cta={<Button>Apply Now</Button>}
        />
      </main>
    </>
  );
}
