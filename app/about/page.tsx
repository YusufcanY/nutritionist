import Welcome from '@/components/sections/about/Welcome';
import Story from '@/components/sections/about/Story';
import Achievements from '@/components/sections/about/Achievements';

export default function About() {
  return (
    <>
      <main className='space-y-12 pb-12 laptop:space-y-24 desktop:space-y-36'>
        <Welcome />
        <Story />
        <Achievements />
      </main>
    </>
  );
}
