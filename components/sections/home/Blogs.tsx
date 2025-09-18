import BlogCard from './BlogCard';

export default function Blogs() {
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
    <section>
      <div className='container mx-auto'>
        <div className='mb-12 text-center laptop:mb-20'>
          <h2 className='mb-4 text-3xl font-bold text-grey-15 laptop:text-4xl desktop:text-5xl'>
            Our Blogs
          </h2>
          <p className='mx-auto max-w-3xl text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'>
            Our blog is a treasure trove of informative and engaging articles
            written by our team of nutritionists, dietitians, and wellness
            experts. Here&apos;s what you can expect from our blog.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 laptop:grid-cols-2 desktop:gap-8'>
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
