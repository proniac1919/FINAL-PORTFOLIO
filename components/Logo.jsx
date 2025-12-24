'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href='/#home'
      className="flex items-center gap-x-2 cursor-pointer relative z-50"
      aria-label="Home"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[50px] h-[50px]">
        <Image src='/logo.svg' fill priority alt='Abhishek Das' />
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ width: 0, opacity: 0, x: -20 }}
            animate={{ width: "auto", opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: -20 }}
            transition={{ duration: 0.35, type: "spring", stiffness: 200, damping: 20 }}
            className="overflow-hidden whitespace-nowrap text-xl font-bold text-primary"
          >
            Abhishek Das
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
};

export default Logo;