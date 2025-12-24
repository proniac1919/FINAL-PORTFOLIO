'use client';
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { Database, Server, BarChart, Code2, Cloud, Layers } from "lucide-react";

const stackData = [
    {
        category: "Languages & Scripting",
        icon: <Code2 size={24} className="text-blue-500" />,
        skills: ["Python", "SQL", "Java", "Bash"],
        description: "Core logic and automation"
    },
    {
        category: "Data Engineering (ETL)",
        icon: <Layers size={24} className="text-purple-500" />,
        skills: ["Pandas", "NumPy", "Apache Airflow", "dbt"],
        description: "Transforming raw data"
    },
    {
        category: "Databases & Warehousing",
        icon: <Database size={24} className="text-green-500" />,
        skills: ["PostgreSQL", "MySQL", "MS SQL Server", "Snowflake"],
        description: "Reliable storage solutions"
    },
    {
        category: "Cloud Services",
        icon: <Cloud size={24} className="text-cyan-500" />,
        skills: ["AWS (S3, Lambda)", "Azure", "GCP"],
        description: "Scalable infrastructure"
    },
    {
        category: "Visualization & BI",
        icon: <BarChart size={24} className="text-orange-500" />,
        skills: ["Power BI", "Tableau", "Looker", "Excel"],
        description: "Actionable insights"
    }
];

const TechStack = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stackData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Tilt
                        tiltMaxAngleX={10}
                        tiltMaxAngleY={10}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        className="glass p-6 rounded-xl hover:border-primary/50 transition-colors group h-full"
                    >
                        <div className="flex items-center gap-x-4 mb-4">
                            <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/20 transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">{item.category}</h4>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, i) => (
                                <span key={i} className="text-sm font-medium bg-background px-3 py-1 rounded-full border border-border shadow-sm group-hover:border-primary/30 transition-colors">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Tilt>
                </motion.div>
            ))}
        </div>
    );
};

export default TechStack;
