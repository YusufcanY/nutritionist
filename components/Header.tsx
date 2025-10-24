'use client';

import Link from 'next/link';
import { PartyPopperIcon } from './icons/PartyPopper';
import { useRef, useState } from 'react';
import { ArrowRightIcon, ArrowRightIconHandle } from './icons/ArrowRight';
import Image from 'next/image';
import { cn, useIsDesktop, useIsMobile } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { MenuIcon, MenuIconHandle } from './icons/Menu';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from './ui/Button';

export default function Header() {
  const arrowRightRef = useRef<ArrowRightIconHandle>(null);
  const menuRef = useRef<MenuIconHandle>(null);
  const isDesktop = useIsDesktop();
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/team', label: 'Team' },
    { href: '/process', label: 'Process' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
  ];
  return (
    <header>
      <div className='relative overflow-hidden bg-dark-green-15 py-3.5 laptop:static'>
        <div className='container mx-auto'>
          {isMobile && (
            <>
              <div className='absolute -bottom-1/2 left-0 -translate-x-1/2'>
                <Image
                  src='/abstract-1.svg'
                  priority
                  alt='abstract'
                  width={144}
                  height={74}
                />
              </div>
              <div className='absolute right-0 -bottom-1/2 translate-x-1/2'>
                <Image
                  src='/abstract-1.svg'
                  priority
                  alt='abstract'
                  width={144}
                  height={74}
                  className='scale-x-[-1]'
                />
              </div>
            </>
          )}

          <div className='relative z-10 grid h-11 place-content-center overflow-hidden rounded-md border border-dark-green-25 bg-dark-green-20'>
            <Link
              href='#'
              className='flex items-center justify-center gap-2.5 text-white'
              onMouseEnter={() => arrowRightRef.current?.startAnimation()}
              onMouseLeave={() => arrowRightRef.current?.stopAnimation()}
            >
              <PartyPopperIcon
                className='text-green-70'
                size={isDesktop ? 24 : 20}
              />
              <span className='text-sm font-medium laptop:text-base desktop:text-lg'>
                Join Our Personalized Nutrition Demo For Free
              </span>
              <ArrowRightIcon
                ref={arrowRightRef}
                size={isDesktop ? 24 : 20}
                className='ml-2'
              />
            </Link>

            {!isMobile && (
              <>
                <div className='absolute top-1/2 left-8 -translate-y-1/2'>
                  <Image
                    src='/abstract-1.svg'
                    priority
                    alt='abstract'
                    width={195}
                    height={100}
                  />
                </div>
                <div className='absolute top-1/2 right-8 -translate-y-1/2'>
                  <Image
                    src='/abstract-1.svg'
                    priority
                    alt='abstract'
                    width={195}
                    height={100}
                    className='scale-x-[-1]'
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className='border-t border-dark-green-20 bg-dark-green-15'>
        <div className='container mx-auto flex items-center justify-between py-4 desktop:py-5'>
          <Link href='/'>
            <Image
              src={isDesktop ? '/logo-desktop.svg' : '/logo-mobile.svg'}
              alt='logo'
              priority
              width={isDesktop ? 195 : 147}
              height={isDesktop ? 45 : 34}
            />
          </Link>
          <div className='hidden items-center gap-6 text-sm font-semibold text-white laptop:flex desktop:text-lg'>
            {links.map(link => (
              <Link
                href={link.href}
                key={link.href}
                className={cn(
                  'transition-colors hover:text-green-70',
                  pathname === link.href && 'text-green-70'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button>Contact Us</Button>
          </div>
          <div className='flex laptop:hidden'>
            <button
              onClick={() => {
                setIsMobileNavOpen(!isMobileNavOpen);
                if (isMobileNavOpen) {
                  menuRef.current?.stopAnimation();
                } else {
                  menuRef.current?.startAnimation();
                }
              }}
            >
              <MenuIcon ref={menuRef} size={34} className='text-green-70' />
            </button>
          </div>
          <AnimatePresence>
            {isMobileNavOpen && isMobile && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: '0%' }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className='absolute top-[calc(66px+72px)] left-0 min-h-[calc(100dvh-66px-72px)] w-full border-t border-dark-green-20 bg-dark-green-15'
              >
                <div className='container mx-auto flex flex-col items-start gap-6 pt-8'>
                  {links.map((link, index) => (
                    <motion.div
                      key={`${link.href}-${isMobileNavOpen}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                        delay: index * 0.1,
                      }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'text-2xl font-bold text-white',
                          pathname === link.href && 'text-green-70'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    key={`contact-${isMobileNavOpen}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeOut',
                      delay: links.length * 0.1,
                    }}
                  >
                    <button className='rounded-md bg-green-70 px-4 py-3 text-xl text-grey-15 desktop:rounded-lg'>
                      Contact Us
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
