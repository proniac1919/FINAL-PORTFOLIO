'use client';
import { motion } from "framer-motion";
import { Download, Mail, MapPin, Phone, ExternalLink, Calendar, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Socials from "@/components/Socials";

const cvData = {
    personal: {
        name: "Abhishek Das",
        title: "Data Scientist | Software Developer",
        email: "abhishek.das1359x@gmail.com",
        location: "India",
        about: "I don't just write code; I architect data solutions. My journey involves rigorous statistical analysis, building robust ETL pipelines, and creating dashboards that drive business strategy. With deep expertise in SQL, Python, and Cloud technologies, I transform raw, chaotic data into structured, actionable intelligence.",
    },
    experience: [
        {
            company: 'Blue Star',
            role: 'Application Engineer',
            years: 'Sept 2025 - Present',
            description: "Driving application development and engineering solutions."
        },
        {
            company: 'Sukoon Unlimited',
            role: 'Data Analyst Internship',
            years: 'Feb 2025 - Apr 2025',
            description: "Analyzed data trends to support business decision-making."
        },
        {
            company: 'Alma Better',
            role: 'Data Science Apprenticeship',
            years: 'Jan 2024 - Jan 2025',
            description: "Intensive training and practical application of Data Science methodologies."
        },
    ],
    education: [
        {
            university: 'Chandigarh University',
            qualification: 'Master of Computer Application (MCA)',
            years: '2021 - 2023'
        },
        {
            university: 'Centurion University of Technology and Management',
            qualification: 'Bachelor of Science - Information Technology (BSc. IT)',
            years: '2018 - 2021'
        },
    ],
    skills: [
        "Python (Pandas, NumPy, SciPy, Matplotlib)",
        "MS SQL Server",
        "AWS",
        "PowerBI, Tableau",
        "MS Excel (VBA, Macro)",
        "Machine Learning",
        "Data Analysis"
    ],
    certifications: [
        "Salesforce AI Associate",
        "Google Data Analytics",
        "IBM Data Analyst",
        "Full Stack Data Science (AlmaBetter)"
    ]
};

const OnlineCV = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="min-h-screen pt-24 pb-12 bg-background relative overflow-hidden font-primary">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[20%] w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex justify-end mb-8 print:hidden">
                    <Button onClick={handlePrint} className="gap-2 shadow-lg hover:shadow-primary/25 transition-all">
                        <Download size={18} /> Download / Print CV
                    </Button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl max-w-5xl mx-auto print:shadow-none print:border-none print:p-0 print:bg-transparent"
                >
                    {/* Header */}
                    <header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 dark:border-white/10 pb-8 mb-8 gap-6">
                        <div>
                            <h1 className="h1 text-4xl md:text-5xl lg:text-6xl mb-2 text-primary">{cvData.personal.name}</h1>
                            <p className="text-xl md:text-2xl text-foreground/80 font-light">{cvData.personal.title}</p>

                            <div className="flex flex-wrap gap-4 mt-4 text-sm md:text-base text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Mail size={16} className="text-primary" />
                                    {cvData.personal.email}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-primary" />
                                    {cvData.personal.location}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-4">
                            <Socials
                                containerStyles="flex gap-x-4"
                                iconsStyles="w-10 h-10 border border-primary/20 bg-primary/10 rounded-full flex justify-center items-center text-primary text-xl hover:bg-primary hover:text-white transition-all duration-300"
                            />
                        </div>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Left Column (Main Content) */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Summary */}
                            <section>
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-foreground">
                                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                                    Professional Summary
                                </h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {cvData.personal.about}
                                </p>
                            </section>

                            {/* Experience */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                                    Experience
                                </h2>
                                <div className="space-y-8">
                                    {cvData.experience.map((item, index) => (
                                        <div key={index} className="relative pl-8 border-l-2 border-primary/30 last:border-0 group">
                                            <div className="absolute top-0 -left-[9px] w-4 h-4 bg-background border-2 border-primary rounded-full group-hover:bg-primary transition-colors duration-300" />
                                            <div className="bg-white/5 dark:bg-white/5 rounded-lg p-6 border border-white/10 hover:border-primary/30 transition-colors">
                                                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                                                    <h3 className="text-xl font-semibold">{item.company}</h3>
                                                    <Badge variant="secondary" className="w-fit mt-2 sm:mt-0">{item.years}</Badge>
                                                </div>
                                                <p className="text-primary font-medium mb-2">{item.role}</p>
                                                <p className="text-muted-foreground text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Projects Highlight */}
                            <section className="print:break-inside-avoid">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                                    <span className="w-8 h-1 bg-primary rounded-full"></span>
                                    Key Projects
                                </h2>
                                <div className="grid gap-4">
                                    <div className="bg-white/5 dark:bg-white/5 rounded-lg p-5 border border-white/10">
                                        <h3 className="font-semibold text-lg flex justify-between items-center">
                                            FPI Report and Nifty Indices
                                            <Link href="https://github.com/theAbhishekDas/FPI-Report-Data-Analysis-Project" className="text-primary hover:underline text-sm flex items-center gap-1">View <ExternalLink size={12} /></Link>
                                        </h3>
                                        <p className="text-muted-foreground text-sm mt-2">Data Analysis project focusing on financial indices.</p>
                                    </div>
                                    <div className="bg-white/5 dark:bg-white/5 rounded-lg p-5 border border-white/10">
                                        <h3 className="font-semibold text-lg flex justify-between items-center">
                                            Heart Disease Diagnostic Analysis
                                            <Link href="https://github.com/theAbhishekDas/Heart-Disease-Diagnostic-Analysis" className="text-primary hover:underline text-sm flex items-center gap-1">View <ExternalLink size={12} /></Link>
                                        </h3>
                                        <p className="text-muted-foreground text-sm mt-2">Data Science project using diagnostic data for analysis.</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Right Column (Sidebar) */}
                        <div className="space-y-10">

                            {/* Education */}
                            <section>
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
                                    <GraduationCap className="text-primary" size={24} />
                                    Education
                                </h2>
                                <div className="space-y-6">
                                    {cvData.education.map((item, index) => (
                                        <div key={index} className="bg-secondary/20 rounded-lg p-4 border border-border/50">
                                            <div className="text-primary font-bold">{item.years}</div>
                                            <div className="font-semibold mt-1">{item.qualification}</div>
                                            <div className="text-sm text-muted-foreground mt-1">{item.university}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Skills */}
                            <section>
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
                                    <Briefcase className="text-primary" size={24} />
                                    Skills
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {cvData.skills.map((skill, index) => (
                                        <Badge key={index} className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-primary/20">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </section>

                            {/* Certifications */}
                            <section>
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground">
                                    <Calendar className="text-primary" size={24} />
                                    Certifications
                                </h2>
                                <ul className="space-y-3">
                                    {cvData.certifications.map((cert, index) => (
                                        <li key={index} className="flex items-start gap-2 text-sm text-foreground/90">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                                            {cert}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center text-muted-foreground text-sm print:hidden">
                        <p>Generated from Portfolio • {new Date().getFullYear()}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default OnlineCV;
