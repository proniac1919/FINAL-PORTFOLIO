'use client';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className = '' }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-100"
                aria-hidden="true"
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full text-red-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[2px] transition-all duration-100"
                aria-hidden="true"
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchText;
