'use client';
import { motion } from "framer-motion";
import { FilePieChart, FlaskConical, LineChart } from 'lucide-react';

const serviceData = [
    {
        icon: <FilePieChart size={32} className="text-[#ffdb70]" />,
        title: 'Data Analyst',
        description: 'Comprehensive data analysis services, including exploration, visualization, predictive modeling, and insights for decision-making.'
    },
    {
        icon: <FlaskConical size={32} className="text-[#ffdb70]" />,
        title: 'A/B Testing',
        description: 'Facilitated with A/B testing services to optimize strategies by comparing effectiveness and making data-driven recommendations.'
    },
    {
        icon: <LineChart size={32} className="text-[#ffdb70]" />,
        title: 'Performance Tracking & Reporting',
        description: 'Provide Performance Tracking and Reporting services, monitoring KPIs and generating insightful reports for decision-making.'
    },
]

const AboutTab = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
        >
            {/* Header */}
            <header className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white relative inline-block">
                    About Me
                    <span className="block h-1.5 w-[40px] bg-[#ffdb70] rounded-full mt-2"></span>
                </h2>

                <p className="text-white/80 leading-relaxed text-base pt-4">
                    Experienced data analyst proficient in extracting insights from complex datasets, driving data-driven decisions with advanced analytical skills and strategic thinking.
                </p>
                <p className="text-white/80 leading-relaxed text-base pt-2">
                    I don't just write code; I architect data solutions. My journey involves rigorous statistical analysis, building robust ETL pipelines, and creating dashboards that drive business strategy.
                </p>
            </header>

            {/* What I Do */}
            <section>
                <h3 className="text-2xl font-bold mb-6 text-white">What I'm Doing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {serviceData.map((item, index) => (
                        <div key={index} className="bg-[#212123] border border-[#383838] p-6 rounded-[20px] shadow-sm hover:-translate-y-1 transition-transform duration-300 group flex gap-4 items-start relative z-10 overflow-hidden">
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2b2b2c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                            <div className="shrink-0 mt-1">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </motion.div>
    );
};

export default AboutTab;
