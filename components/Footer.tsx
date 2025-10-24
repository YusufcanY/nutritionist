'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useIsDesktop } from '@/lib/utils';

export default function Footer() {
  const isDesktop = useIsDesktop();

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/process', label: 'Process' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const contactInfo = [
    {
      type: 'email',
      value: 'hello@squareup.com',
      link: 'mailto:hello@squareup.com',
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='text-green-70'
        >
          <path
            d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <polyline
            points='22,6 12,13 2,6'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      type: 'phone',
      value: '+91 91813 23 2309',
      link: 'tel:+91 91813 23 2309',
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='text-green-70'
        >
          <path
            d='M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59344 1.99522 8.06544 2.16708 8.43945 2.48353C8.81346 2.79999 9.06681 3.23945 9.15999 3.72C9.33657 4.68007 9.63131 5.61273 10.04 6.5C10.2 6.89 10.16 7.33 9.92999 7.69L8.62999 9.51C10.1 12.06 12.44 14.4 14.99 15.87L16.81 14.57C17.17 14.34 17.61 14.3 18 14.46C18.8873 14.8687 19.8199 15.1634 20.78 15.34C21.2658 15.4336 21.7093 15.6918 22.0265 16.0736C22.3436 16.4554 22.5121 16.9338 22.5 17.42L22 16.92Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      type: 'location',
      value: 'Somewhere in the World',
      link: 'https://maps.app.goo.gl/H1JWT2goYpah3hoj8',
      icon: (
        <svg
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='text-green-70'
        >
          <path
            d='M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <circle
            cx='12'
            cy='10'
            r='3'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
  ];

  return (
    <footer className='bg-dark-green-15 px-8 py-8 laptop:px-8 laptop:py-8 desktop:px-8 desktop:py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col space-y-8'>
          <div className='flex flex-col items-center justify-between gap-5 laptop:flex-row'>
            <Link href='/' className='flex-shrink-0'>
              <Image
                src='/logo-desktop.svg'
                alt='Nutritionist Logo'
                width={isDesktop ? 195 : 147}
                height={isDesktop ? 45 : 34}
              />
            </Link>

            <nav className='flex flex-row flex-wrap items-center justify-between gap-4 laptop:items-center laptop:justify-between laptop:gap-6'>
              {navigationLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-sm font-semibold text-white transition-colors hover:text-green-70 laptop:text-sm desktop:text-base'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className='flex flex-col items-center justify-between gap-5 rounded-lg border border-dark-green-25 bg-dark-green-20 p-5 laptop:flex-row laptop:px-4 laptop:py-3.5 desktop:px-5 desktop:py-4'>
            <div className='flex w-full flex-col items-center justify-between gap-4 laptop:w-auto laptop:flex-row laptop:items-center laptop:justify-between desktop:gap-5'>
              {contactInfo.map(contact => (
                <Link
                  key={contact.type}
                  href={contact.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex w-full items-center justify-center space-x-3 rounded-sm border border-dark-green-25 px-4 py-3 laptop:w-auto desktop:rounded-md'
                >
                  <span className='text-green-70'>{contact.icon}</span>
                  <span className='text-sm font-medium text-white'>
                    {contact.value}
                  </span>
                </Link>
              ))}
            </div>

            <div>
              <p className='text-sm text-grey-95'>
                © 2024 Nutritionist. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
