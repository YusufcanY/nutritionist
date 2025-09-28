import {
  Backpack,
  ClipboardList,
  Dumbbell,
  GraduationCap,
  Leaf,
  Utensils,
} from 'lucide-react';
import FeatureCard from './FeatureCard';
import * as motion from 'motion/react-client';

export default function Features() {
  const features = [
    {
      icon: <Leaf className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Personalized Nutrition Plans',
      description:
        'Receive a tailored nutrition plan designed specifically for your body and goals. Our certified nutritionists will consider your unique needs, dietary preferences, and health conditions to create a plan that suits you best.',
    },
    {
      icon: <GraduationCap className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Guidance from Certified Nutritionists',
      description:
        'Our team of experienced and certified nutritionists will provide professional guidance and support throughout your journey. They will answer your questions, address your concerns, and keep you motivated as you work towards your goals.',
    },
    {
      icon: <Utensils className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Food Tracking and Analysis',
      description:
        'Effortlessly track your food intake using our user-friendly app. Our nutritionists will analyze your data to provide insights into your eating habits, help you identify areas for improvement, and make personalized recommendations.',
    },
    {
      icon: <ClipboardList className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Meal Planning and Recipes',
      description:
        'Access a vast collection of delicious and healthy recipes tailored to your dietary needs. Our nutritionists will also create personalized meal plans, making it easier for you to stay on track and enjoy nutritious meals.',
    },
    {
      icon: <Dumbbell className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Lifestyle and Behavior Coaching',
      description:
        'Achieving sustainable results requires more than just a diet plan. Our nutritionists will work with you to develop healthy habits, address emotional eating, and provide strategies to overcome obstacles along the way.',
    },
    {
      icon: <Backpack className='size-6 laptop:size-8 desktop:size-10' />,
      title: 'Nutritional Education and Workshops',
      description:
        'Expand your knowledge of nutrition through informative articles and educational workshops. Our nutritionists will equip you with the knowledge and tools to make informed choices for long-term success.',
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
          Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'
        >
          Welcome to the Feature Section of Nutritionist, your ultimate
          destination for all things nutrition and wellness.
        </motion.p>
        <div className='mt-12 grid grid-cols-1 gap-4 laptop:mt-20 laptop:grid-cols-2 desktop:gap-8'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <FeatureCard key={feature.title} {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
