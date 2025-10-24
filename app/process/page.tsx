import PageFooter from '@/components/PageFooter';
import PageHeader from '@/components/PageHeader';
import FeatureCard from '@/components/sections/home/FeatureCard';
import { Button } from '@/components/ui/Button';
import {
  Calendar,
  ClipboardCheck,
  FileText,
  Utensils,
  HeartHandshake,
  LineChart,
  CalendarCheck,
  BookOpen,
  Settings,
  Target,
} from 'lucide-react';
import * as motion from 'motion/react-client';

export default function Process() {
  const steps = [
    {
      icon: <Calendar className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Initial Consultation',
      description:
        'We start by scheduling an initial consultation, either in person or through a convenient online meeting. During this session, we will discuss your health history, lifestyle, goals, and any specific dietary requirements. Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.',
    },
    {
      icon: <ClipboardCheck className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Assessing Your Needs',
      description:
        'Our team of experienced nutritionists and dietitians will conduct a thorough assessment of your nutritional needs and create a personalized plan tailored to your unique requirements.',
    },
    {
      icon: <FileText className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Personalized Nutrition Plan',
      description:
        'Based on the information gathered, we will develop a personalized nutrition plan that takes into account your dietary preferences, lifestyle, and health goals. This plan will provide you with clear guidelines on what to eat, portion sizes, and meal timing. To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan.',
    },
    {
      icon: <Utensils className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Meal Planning and Recipes',
      description:
        'To make your journey easier, we will provide you with a variety of delicious and nutritious meal options, along with recipes that align with your personalized nutrition plan.',
    },
    {
      icon: <HeartHandshake className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Ongoing Support',
      description:
        'Throughout your journey, our team of nutrition experts will be there to provide ongoing support, answer your questions, and offer guidance. We believe in the power of continuous encouragement to help you stay motivated and achieve long-term success.',
    },
    {
      icon: <LineChart className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Progress Tracking',
      description:
        'We encourage you to track your progress using our user-friendly mobile app or website tools. You can log your meals, monitor your weight, and track your physical activity, allowing you to have a clear picture of your progress and make any necessary adjustments.',
    },
    {
      icon: <CalendarCheck className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Regular Check-ins',
      description:
        'We will schedule regular check-ins to review your progress, address any concerns, and make any necessary adjustments to your nutrition plan. Our goal is to ensure that you are consistently moving towards your desired outcomes.',
    },
    {
      icon: <BookOpen className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Education and Resources',
      description:
        'Along the way, we will provide you with educational resources, such as articles, guides, and videos, to enhance your understanding of nutrition and empower you to make informed choices for a healthier lifestyle.',
    },
    {
      icon: <Settings className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Fine-Tuning and Adjustments',
      description:
        "As your journey progresses and your goals evolve, we will fine-tune and make adjustments to your nutrition plan to ensure that it continues to align with your changing needs. Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you've completed the program.",
    },
    {
      icon: <Target className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Sustainable Lifestyle Habits',
      description:
        "Our ultimate goal is to help you develop sustainable lifestyle habits that will support your long-term health and wellness. We will equip you with the knowledge and skills to maintain your progress even after you've completed the program.",
    },
  ];
  return (
    <main className='container mx-auto space-y-12 py-12 laptop:space-y-24 laptop:py-20 desktop:space-y-36 desktop:py-24'>
      <PageHeader
        title='Your Journey to Health and Wellness'
        description='At Nutritionist, we believe in providing a personalized and comprehensive approach to help you achieve your health and wellness goals. Our "How it Works" process is designed to guide you through each step of your journey, ensuring that you receive the support, knowledge, and tools you need to succeed. Here&apos;s a detailed breakdown of our process:'
      />
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center text-3xl font-bold text-grey-15 laptop:text-4xl desktop:text-5xl'
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'
        >
          We provide a step-by-step guide on how to get started on your journey
          towards better health and nutrition. We are here to simplify the
          process and make it easy for you to navigate our platform and access
          the resources you need to achieve your goals. Here&apos;s how it
          works:
        </motion.p>
        <div className='mt-12 grid grid-cols-1 gap-4 laptop:mt-20 laptop:grid-cols-2 desktop:gap-8'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <FeatureCard
                {...step}
                subtitle={`${index < 9 ? '0' : ''}${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <PageFooter
        title='Are you ready to embark on a transformative journey towards better health and wellness?'
        description='Join us at Nutritionist and let us guide you on the path to a healthier and happier you.'
        cta={<Button>Join Us Now</Button>}
      />
    </main>
  );
}
