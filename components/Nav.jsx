'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, User, Briefcase, BadgeCheck, Rocket, Folder, Mail } from 'lucide-react';

const links = [
  { path: '/', name: 'home', icon: <Home size={18} /> },
  { path: '/#about', name: 'about me', icon: <User size={18} /> },
  { path: '/#services', name: 'my services', icon: <Briefcase size={18} /> },
  { path: '/#certifications', name: 'certifications', icon: <BadgeCheck size={18} /> },
  { path: '/#latest-works', name: 'latest project', icon: <Rocket size={18} /> },
  { path: '/projects', name: 'my projects', icon: <Folder size={18} /> },
  { path: '/contact', name: 'contact', icon: <Mail size={18} /> },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles, withIcons = false }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState('');

  useEffect(() => {
    setHash(window.location.hash);
    const handleHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to section after navigation
  useEffect(() => {
    if (hash && pathname === '/') {
      const sectionId = hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash, pathname]);

  const handleClick = (e, linkPath) => {
    // If it's a hash link (section link)
    if (linkPath.includes('#')) {
      e.preventDefault();
      const targetHash = linkPath.substring(linkPath.indexOf('#'));
      const sectionId = targetHash.replace('#', '');

      // If we're already on the home page
      if (pathname === '/') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', linkPath);
          setHash(targetHash);
        }
      } else {
        // Navigate to home page first, then scroll
        setHash(targetHash);
        router.push(linkPath);
      }
    } else {
      // Regular page navigation
      setHash('');
    }
  };

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        const isActive = link.path === pathname + hash;
        return (
          <Link href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
            onClick={(e) => handleClick(e, link.path)}
          >
            {isActive && (
              <motion.span initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ type: 'tween' }} layoutId='underline' className={`${underlineStyles}`} />
            )}
            {withIcons && <span className="mr-2">{link.icon}</span>}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;