import Hero from '@/components/sections/home/Hero';
import Features from '@/components/sections/home/Features';
import Testimonials from '@/components/sections/home/Testimonials';
import Blogs from '@/components/sections/home/Blogs';
import Pricing from '@/components/sections/home/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className='space-y-12 pb-12 laptop:space-y-24 desktop:space-y-36'>
        <Hero />
        <Features />
        <Blogs />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
