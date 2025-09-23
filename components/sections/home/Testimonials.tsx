'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import TestimonialCard from './TestimonialCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/public/css/testimonial.css';
import { Button } from '@/components/ui/Button';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      name: 'Jennifer Anderson',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote:
        'Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
      name: 'Robert Johnson',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote:
        "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      name: 'Emily Davis',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote:
        "I can't thank Nutritionist enough for their personalized nutrition coaching. It has completely transformed my approach to food and helped me shed those extra pounds. Highly recommended!",
      name: 'Jennifer Anderson',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote:
        'Nutritionist has been a game-changer for me. The expert guidance and support I received from their team made my weight loss journey so much easier. Thank you!',
      name: 'Robert Johnson',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    },
    {
      quote:
        "I had struggled with my weight for years until I found Nutritionist. Their personalized approach and tailored nutrition plan made all the difference. I've never felt better!",
      name: 'Emily Davis',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  ];

  return (
    <section>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='mb-12 text-center laptop:mb-20'
        >
          <h2 className='mb-4 text-3xl font-bold text-grey-15 laptop:text-4xl desktop:text-5xl'>
            Our Testimonials
          </h2>
          <p className='mx-auto max-w-4xl text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'>
            Our satisfied clients share their success stories and experiences on
            their journey to better health and well-being.
          </p>
        </motion.div>

        <div>
          <div>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              navigation={{
                nextEl: '.testimonials-button-next',
                prevEl: '.testimonials-button-prev',
              }}
              pagination={{
                el: '.testimonials-pagination',
                clickable: true,
                bulletClass: 'testimonials-bullet',
                bulletActiveClass: 'testimonials-bullet-active',
              }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                  centeredSlides: true,
                },
              }}
              className='testimonials-swiper'
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide
                  key={index}
                  className='flex justify-center transition-all duration-300 ease-in-out'
                >
                  <TestimonialCard {...testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='mt-8 flex justify-center gap-5 laptop:mt-10 desktop:mt-12 desktop:gap-8'>
            <Button
              variant='outline'
              className='testimonials-button-prev size-12 desktop:size-16'
            >
              <ChevronLeft className='size-7 text-grey-20 desktop:size-9' />
            </Button>
            <div className='flex items-center'>
              <div className='testimonials-pagination'></div>
            </div>
            <Button
              variant='outline'
              className='testimonials-button-next size-12 desktop:size-16'
            >
              <ChevronRight className='size-7 text-grey-20 desktop:size-9' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
