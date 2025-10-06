import * as motion from 'motion/react-client';
import StoryItem from './StoryItem';

export default function Story() {
  /* 
  Inspiring Transformations Story
Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.
July 1, 2025
Recognition and Accolades Story
Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field.
March 10, 2023
Continued Growth Story
Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.
November 2, 2021
Collaborating for Success Story
Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.
July 15, 2019
Enhanced Support Story
In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.
April 1, 2018
Innovating for Clients Story
Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.
January 20, 2017
Celebrating Success Stories
Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services.
September 5, 2015
Expanding Reach Story
Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base.
June 10, 2014
Research and Expertise Story
After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching.
March 15, 2012
The Inception Story
On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist.
January 1, 2010
  */
  const stories = [
    {
      title: 'Inspiring Transformations Story',
      description:
        'Nutritionist continues to empower individuals to transform their lives through personalized nutrition coaching. With an expanding client base and a growing team of experts, we remain committed to our goal of helping people lose weight, improve their health, and lead happier, more fulfilling lives. Our journey of inspiring transformations continues, one client at a time.',
      date: 'July 1, 2025',
      image: '/story/inspiring-transformations-story.jpg',
    },
    {
      title: 'Recognition and Accolades Story',
      description:
        'Nutritionist received industry recognition for its excellence in personalized nutrition coaching. Our innovative approach and dedication to client success earned us accolades and solidified our position as a leading provider in the field.',
      date: 'March 10, 2023',
      image: '/story/recognition-and-accolades-story.jpg',
    },
    {
      title: 'Continued Growth Story',
      description:
        'Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to helping individuals achieve their health and weight loss goals. This milestone highlighted the positive impact we have made on the lives of thousands of people.',
      date: 'November 2, 2021',
      image: '/story/continued-growth-story.jpg',
    },
    {
      title: 'Collaborating for Success Story',
      description:
        'Nutritionist established partnerships with renowned health professionals, including nutritionists, dietitians, and wellness experts. These collaborations allowed us to incorporate diverse perspectives and expertise, ensuring the highest level of guidance for our clients.',
      date: 'July 15, 2019',
      image: '/story/collaborating-for-success-story.jpg',
    },
    {
      title: 'Enhanced Support Story',
      description:
        'In response to the growing demand for personalized nutrition coaching, Nutritionist expanded its team of qualified nutritionists and dietitians. This milestone enabled us to provide even more individualized care and support to our clients.',
      date: 'April 1, 2018',
      image: '/story/enhanced-support-story.jpg',
    },
    {
      title: 'Innovating for Clients Story',
      description:
        'Nutritionist introduced a mobile app, revolutionizing the way clients engage with their personalized nutrition plans. The app allowed for easy tracking of progress, access to resources, and seamless communication with their dedicated nutrition coaches.',
      date: 'January 20, 2017',
      image: '/story/innovating-for-clients-story.jpg',
    },
    {
      title: 'Celebrating Success Stories',
      description:
        "Nutritionist celebrated its 500th client success story. These stories showcased the positive impact of personalized nutrition coaching on individuals' lives, further motivating our team to continue providing exceptional services.",
      date: 'September 5, 2015',
      image: '/story/celebrating-success-stories.jpg',
    },
    {
      title: 'Expanding Reach Story',
      description:
        'Nutritionist expanded its services by launching an online platform, allowing individuals from all over the world to access personalized nutrition plans and expert guidance. This milestone brought convenience and accessibility to our growing client base.',
      date: 'June 10, 2014',
      image: '/story/expanding-reach-story.jpg',
    },
    {
      title: 'Research and Expertise Story',
      description:
        'After extensive research and collaborating with nutrition experts, Sarah Mitchell and her team developed a comprehensive program rooted in scientific knowledge and evidence-based strategies. This milestone marked the establishment of Nutritionist as a trusted source of personalized nutrition coaching.',
      date: 'March 15, 2012',
      image: '/story/research-and-expertise-story.jpg',
    },
    {
      title: 'The Inception Story',
      description:
        'On this day, Nutritionist was born with the vision of helping individuals achieve their weight loss and health goals through personalized nutrition coaching. The founder, Sarah Mitchell, recognized the need for a sustainable and effective approach to healthy living, and thus began the journey of Nutritionist.',
      date: 'January 1, 2010',
      image: '/story/the-inception-story.jpg',
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
          Our Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className='text-center text-sm font-medium text-grey-20 laptop:text-base desktop:text-lg'
        >
          Welcome to Nutritionist, your partner in achieving optimal health
          through personalized nutrition coaching. Our certified nutritionists
          are here to guide you on your weight loss journey.
        </motion.p>
        <div className='mt-12 overflow-hidden rounded-xl laptop:mt-14 desktop:mt-20'>
          {stories.map((story, index) => (
            <StoryItem
              key={story.title}
              {...story}
              isImageOnRight={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
