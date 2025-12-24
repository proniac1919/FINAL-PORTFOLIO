'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";

// Using a subset of projectData for the vCard
const projects = [
    {
        image: '/work/1.png',
        category: 'Data Analysis',
        name: 'FPI Report and Nifty Indices',
        link: 'https://github.com/theAbhishekDas/FPI-Report-Data-Analysis-Project',
    },
    {
        image: '/work/2.png',
        category: 'Data Science',
        name: 'Heart Disease Diagnostic Analysis',
        link: 'https://github.com/theAbhishekDas/Heart-Disease-Diagnostic-Analysis',
    },
    {
        image: '/work/4.png',
        category: 'Data Analysis',
        name: 'Gender Based Analysis',
        link: 'https://github.com/theAbhishekDas/Cognifyz-Power-BI-Internship/blob/main/Task%202%20Gender%20Based%20Analysis.pbix',
    },
    {
        image: '/work/5.png',
        category: 'Data Analysis',
        name: 'Objective Analysis',
        link: 'https://github.com/theAbhishekDas/Cognifyz-Power-BI-Internship/blob/main/Task%203%20Objective%20Analysis.pbix',
    },
    {
        image: '/work/7.png',
        category: 'Data Analysis',
        name: 'Reason Of Investment',
        link: 'https://github.com/theAbhishekDas/Cognifyz-Power-BI-Internship/blob/main/Task%205%20Reasons%20of%20Investments.pbix',
    },
    {
        image: '/work/9.png',
        category: 'Data Analysis',
        name: 'Combine Insights into a Dashboard',
        link: 'https://github.com/theAbhishekDas/Cognifyz-Power-BI-Internship/blob/main/Task%207%20Combine%20Insights%20into%20a%20Dashboard.pbix',
    },
    {
        image: '/work/10.png',
        category: 'Data Analysis',
        name: 'Amazon Sales Data Analysis',
        link: 'https://github.com/theAbhishekDas/Amazon-Sales-Data-Analysis',
    },
    {
        image: '/work/11.png',
        category: 'Data Science',
        name: 'Titanic Survival Predication',
        link: 'https://github.com/theAbhishekDas/CODSOFT/tree/main/(PROJECT%20_%2001%20TITANIC%20SURVIVAL%20PREDICTION',
    },
    {
        image: '/work/12.png',
        category: 'Data Science',
        name: 'IRIS Flower Classification',
        link: 'https://github.com/theAbhishekDas/CODSOFT/tree/main/(PROJECT%20_%2002)%20IRIS%20FLOWER%20CLASSIFICATION',
    },
    {
        image: '/work/14.png',
        category: 'Applications',
        name: 'Kryptox',
        link: 'https://kryptox-abhishek-das.netlify.app/',
    },
    {
        image: '/work/15.png',
        category: 'Applications',
        name: 'FindR',
        link: 'https://findrnow.netlify.app/search',
    },
];

const uniqueCategories = ['All', ...new Set(projects.map(p => p.category))];

const PortfolioTab = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = projects.filter(project =>
        filter === 'All' ? true : project.category === filter
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
        >
            <header className="mb-4">
                <h2 className="text-3xl font-bold mb-4 text-white relative inline-block">
                    Portfolio
                    <span className="block h-1.5 w-[40px] bg-[#ffdb70] rounded-full mt-2"></span>
                </h2>
            </header>

            {/* Filters */}
            <ul className="flex flex-wrap gap-6 text-base font-medium pl-2">
                {uniqueCategories.map((category, index) => (
                    <li key={index}>
                        <button
                            onClick={() => setFilter(category)}
                            className={`transition-colors duration-300 ${filter === category ? 'text-[#ffdb70]' : 'text-white/70 hover:text-white'}`}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            key={index}
                            className="group relative rounded-[16px] overflow-hidden aspect-[4/3] bg-[#212123] shadow-lg cursor-pointer"
                        >
                            <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-[#1e1e1f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="w-12 h-12 bg-[#2b2b2c] rounded-xl flex items-center justify-center text-[#ffdb70] hover:bg-[#383838] transition-colors mb-3 shadow-md"
                                >
                                    <Eye size={24} />
                                </Link>
                                <h4 className="text-white font-bold text-lg mb-1">{project.name}</h4>
                                <span className="text-white/60 text-sm font-medium">{project.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

        </motion.div>
    );
};

export default PortfolioTab;
