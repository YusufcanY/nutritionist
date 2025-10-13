import Image from 'next/image';

interface TeamCardProps {
  name: string;
  title: string;
  image: string;
}
export default function TeamCard({ name, title, image }: TeamCardProps) {
  return (
    <div className='relative rounded-lg bg-green-70 desktop:rounded-xl'>
      <Image
        src={image}
        alt={name}
        width={0}
        height={0}
        sizes='100vw'
        className='h-auto max-h-[305px] w-full object-cover object-top'
      />
      <div className='absolute bottom-0 left-0 w-3/4 translate-y-1/2 space-y-0.5 rounded-tr-[20px] bg-green-95 p-5 desktop:space-y-1 desktop:p-8'>
        <h4 className='text-xl font-semibold text-grey-15 desktop:text-2xl'>
          {name}
        </h4>
        <p className='text-sm font-medium text-grey-30 laptop:text-base desktop:text-lg'>
          {title}
        </p>
      </div>
    </div>
  );
}
