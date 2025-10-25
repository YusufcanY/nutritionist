import PageHeader from '@/components/PageHeader';
import Plans from '@/components/sections/pricing/Plans';

export default function Pricing() {
  return (
    <main className='container mx-auto space-y-12 py-12 laptop:space-y-24 laptop:py-20 desktop:space-y-36 desktop:py-24'>
      <PageHeader
        title='Our Pricing'
        description='At Nutritionist, we offer flexible pricing options to accommodate your unique requirements and budget. Our goal is to provide you with exceptional personalized nutrition coaching that is accessible and tailored to your needs. Choose from our three plans below and take the first step towards a healthier lifestyle'
      />
      <Plans />
    </main>
  );
}
