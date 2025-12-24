'use client'
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
import { motion } from "framer-motion";

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
    link: 'https://findrnow.netlify.app/',
  },
]

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
      ? project
      : project.category === category;
  });
  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        <Tabs value={category} onValueChange={setCategory} className='mb-24 xl:mb-48'>
          <TabsList className='w-full flex flex-wrap justify-center gap-2 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  value={category}
                  key={index}
                  className='capitalize w-auto px-4'
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                >
                  <ProjectCard project={project} />
                </motion.div>
              )
            })}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center w-full mt-12">
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </Tabs>
      </div >
    </section >
  );
}

export default Projects