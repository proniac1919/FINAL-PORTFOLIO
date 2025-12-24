'use client';
import { motion } from "framer-motion";
import { Briefcase, BookOpen } from "lucide-react";
import Image from "next/image";

const educationData = [
    {
        university: 'Chandigarh University',
        qualification: 'Master of Computer Application (MCA)',
        years: '2021 — 2023',
        gpa: 'CGPA: 7.99',
        imgPath: '/Logog/CU.png',
    },
    {
        university: 'Centurion University Of Technology And Management',
        qualification: 'Bachelor of Science (BSc.)',
        years: '2018 — 2021',
        gpa: 'CGPA: 8.79',
        imgPath: '/Logog/CUTM.png',
    },
];

const experienceData = [
    {
        company: 'UNIFIED MENTOR',
        role: 'Data Scientist Internship',
        years: 'Feb 2024 — Present',
        description: [
            'Highlighted 2017 as the highest revenue year with $85.12M, followed by $76.12M in 2019 and $20.36M in 2018.',
            'Identified Better Large Canned Shrimp & High-Top Dried Mushrooms as top-selling products and it boosts 30% profit.'
        ]
    },
    {
        company: 'COGNIFYZ TECHNOLOGIES',
        role: 'PowerBI Intern',
        years: 'Nov 2023 — Dec 2023',
        description: [
            'Initiated cost-saving initiatives within the supply chain, slashing annual expenses by $250,000 and boosting profitability by 20%.',
            'Directed a quality assurance process for Power BI reports, leading to 20% decrease in data inaccuracies.'
        ],
        imgPath: '/Logog/SU.png',
    },
    {
        company: 'CODSOFT',
        role: 'Data Scientist Internship',
        years: 'Sep 2023 — Oct 2023',
        description: [
            'Spearheaded three impactful data science projects utilizing Python libraries: Matplotlib, Seaborn, Pyplot, Pandas, and NumPy.',
            'Cleansed and visualized customer behavior data using Matplotlib and Seaborn, achieving 20% conversion rate increase and 10% higher customer retention.',
            'Implemented data-driven strategies with Microsoft Excel, SQL, and Microsoft Power BI, driving 30% revenue growth and 25% enhancement in marketing ROI.'
        ],
        imgPath: '/Logog/Ab.png',
    },
];

const skills = [
    { name: "Python", level: 90 },
    { name: "SQL", level: 80 },
    { name: "Excel", level: 70 },
    { name: "Microsoft PowerBI", level: 90 },
    { name: "Tableau", level: 80 },
];

const ResumeTab = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="space-y-10"
        >
            <header className="mb-4">
                <h2 className="text-3xl font-bold mb-4 text-white relative inline-block">
                    Resume
                    <span className="block h-1.5 w-[40px] bg-[#ffdb70] rounded-full mt-2"></span>
                </h2>
            </header>

            {/* Education */}
            <section>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-[12px] bg-[#212123] border border-[#383838] flex items-center justify-center text-[#ffdb70] shadow-sm relative z-10">
                        <BookOpen size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <div className="relative border-l border-[#383838] ml-6 space-y-10 pl-8 pb-4">
                    {educationData.map((item, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -left-[37px] top-1.5 w-4 h-4 bg-[#1e1e1f] border-[3px] border-[#ffdb70]/60 rounded-full shadow-[0_0_0_4px_#2b2b2c] z-10">
                                <span className="absolute inset-0 m-auto w-1.5 h-1.5 bg-[#ffdb70] rounded-full"></span>
                            </span>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">{item.university}</h4>
                                <span className="text-[#ffdb70] text-sm font-medium block mb-2">{item.years}</span>
                                <p className="text-white/80 text-sm mb-1">{item.qualification}</p>
                                {item.gpa && <p className="text-white/60 text-sm">{item.gpa}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Experience */}
            <section>
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-[12px] bg-[#212123] border border-[#383838] flex items-center justify-center text-[#ffdb70] shadow-sm relative z-10">
                        <BookOpen size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Experience</h3>
                </div>

                <div className="relative border-l border-[#383838] ml-6 space-y-10 pl-8 pb-4">
                    {experienceData.map((item, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -left-[37px] top-1.5 w-4 h-4 bg-[#1e1e1f] border-[3px] border-[#ffdb70]/60 rounded-full shadow-[0_0_0_4px_#2b2b2c] z-10">
                                <span className="absolute inset-0 m-auto w-1.5 h-1.5 bg-[#ffdb70] rounded-full"></span>
                            </span>

                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">{item.company}</h4>
                                <p className="text-white/80 text-sm mb-1">{item.role}</p>
                                <span className="text-[#ffdb70] text-sm font-medium block mb-4">{item.years}</span>

                                {item.description && (
                                    <ul className="list-disc list-outside ml-4 space-y-2">
                                        {item.description.map((desc, i) => (
                                            <li key={i} className="text-white/70 text-sm leading-relaxed pl-1">
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="pt-4">
                <h3 className="text-2xl font-bold mb-8 text-white">My Skills</h3>
                <div className="bg-[#212123] p-8 rounded-[20px] border border-[#383838]">
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-bold text-white text-sm">{skill.name}</span>
                                    <span className="text-white/70 text-sm">{skill.level}%</span>
                                </div>
                                <div className="h-2 w-full bg-[#383838] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-[#ffdb70] to-[#ffaa5a] rounded-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </motion.div>
    );
};

export default ResumeTab;
