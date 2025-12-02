'use client';

import PageHeader from '@/components/PageHeader';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { useState } from 'react';
import * as motion from 'motion/react-client';
import BlogCard from '@/components/sections/home/BlogCard';

export default function Blog() {
  const categories = [
    'All',
    'Weight Loss Tips',
    'Healthy Eating',
    'Fitness and Exercise',
    'Mindset and Motivation',
    'Recipes and Meal Planning',
  ];
  const [, setSelectedCategory] = useState<string>('All');
  const blogs = [
    {
      title: 'The Benefits of Hydration for Weight Loss',
      description:
        'Discover how staying hydrated can support your weight loss goals and improve overall health.',
      category: 'Weight Loss',
      author: {
        name: 'Emily Johnson',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      },
      date: '23 May 2023',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
    },
    {
      title: 'Cultivating a Healthy Relationship with Food',
      description:
        'Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.',
      category: 'Mindful Eating',
      author: {
        name: 'Sarah Thompson',
        avatar:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      },
      date: '23 May 2023',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    },
    {
      title: 'Carbohydrates, Proteins, and Fats',
      description:
        'Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.',
      category: 'Understanding Macronutrients',
      author: {
        name: 'Mark Wilson',
        avatar:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      },
      date: '23 May 2023',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop',
    },
    {
      title: 'Quick and Nutritious Options',
      description:
        'Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.',
      category: 'Healthy Snacks on the Go',
      author: {
        name: 'Emily Johnson',
        avatar:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      },
      date: '23 May 2023',
      readTime: '5 min read',
      image:
        'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop',
    },
  ];
  return (
    <>
      <main className='container mx-auto space-y-12 py-12 laptop:space-y-24 laptop:py-20 desktop:space-y-36 desktop:py-24'>
        <PageHeader
          title='Our Blogs'
          description='Welcome to the Blog section of Nutritionist, your trusted source for insightful articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide you with engaging and informative content that will inspire and empower you to make informed decisions about your health. Explore our blog to discover a wealth of resources that cover a wide range of topics related to nutrition, fitness, and overall well-being.'
        >
          <div className='no-scrollbar flex overflow-x-scroll p-5 laptop:px-20 laptop:py-6 desktop:px-36 desktop:py-8'>
            <AnimatedBackground
              defaultValue='All'
              onValueChange={value => setSelectedCategory(value || 'All')}
              className='rounded-md border border-dark-green-30 bg-dark-green-25 desktop:rounded-lg'
              transition={{
                type: 'tween',
                duration: 0.3,
                ease: 'linear',
              }}
            >
              {categories.map(tab => (
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
          className='grid grid-cols-1 gap-6 pb-12 laptop:grid-cols-2 laptop:pb-24 desktop:gap-8 desktop:pb-36'
        >
          {blogs.map((article, index) => (
            <div key={article.title}>
              <BlogCard key={index} {...article} />
            </div>
          ))}
        </motion.div>
      </main>
    </>
  );
}
