'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import ProjectCard from '@/components/ProjectCard';
const projectData = [
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
        image: '/work/3.png',
        category: 'Data Analysis',
        name: 'Data Exploration and Summery',
        link: 'https://github.com/theAbhishekDas/Cognifyz-Power-BI-Internship/blob/main/Task%201%20Data%20Exploration%20and%20Summary.pbix',
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
        image: '/work/6.png',
        category: 'Data Analysis',
        name: 'Investment Duration and Frequency',
        link: 'https://github.com/theAbhishekDas/Cognifyz-Power-BI-Internship/blob/main/Task%204%20Investment%20Duration%20and%20Frequency.pbix',
    },
    {
        image: '/work/7.png',
        category: 'Data Analysis',
        name: 'Reason Of Investment',
        link: 'https://github.com/theAbhishekDas/Cognifyz-Power-BI-Internship/blob/main/Task%205%20Reasons%20of%20Investments.pbix',
    },
    {
        image: '/work/8.png',
        category: 'Data Analysis',
        name: 'Source of Information',
        link: 'https://github.com/theAbhishekDas/Cognifyz-Power-BI-Internship/blob/main/Task%206%20Source%20of%20Information.pbix',
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
        image: '/work/13.png',
        category: 'Data Science',
        name: 'Sales Prediction',
        link: 'https://github.com/theAbhishekDas/CODSOFT/tree/main/(PROJECT%20_%2003)SALES%20PREDICTION',
    },
    {
        image: '/work/14.png',
        category: 'MERN',
        name: 'Kryptox',
        link: 'https://kryptox-abhishek-das.netlify.app/',
    },
    {
        image: '/work/15.png',
        category: 'MERN',
        name: 'FindR',
        link: 'https://findrnow.netlify.app/search',
    },



]
const Work = () => {
    return (
        <section id='latest-works' className="relative mb-12 xl:mb-48 scroll-mt-28">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h2 className="section-title mb-4">Latest Project</h2>
                        <p className="subtitle mb-8">Empowering insights, shaping futures. Our latest project in data analysis, science, and engineering drives innovation at the speed of data.</p>
                    </motion.div>
                    <Link href='/projects'><Button>All projects</Button></Link>
                </div>
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[480px] pb-12" slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {projectData.slice(0, 4).map((project, index) => {
                            return <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>;
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Work