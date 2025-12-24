'use client';
import ThemeToggler from './ThemeToggler';
import React, { useState, useEffect } from 'react'
import Logo from "./Logo";
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  console.log(pathname);


  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener('scroll', scrollYPos)
  })
  return (
    <header
      className={`${header
        ? 'py-4 bg-white/10 dark:bg-black/20 backdrop-blur-lg shadow-lg border-b border-primary/10'
        : 'py-6 bg-transparent'
        } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-transparent'}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all font-medium'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full shadow-[0_0_10px_var(--primary)]' />
            <ThemeToggler />
            {/* mobile navigation */}
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;