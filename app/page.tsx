import Hero from '@/components/sections/home/Hero';
import Features from '@/components/sections/home/Features';

export default function Home() {
  return (
    <main className='space-y-12 laptop:space-y-24 desktop:space-y-36'>
      <Hero />
      <Features />
    </main>
  );
}
