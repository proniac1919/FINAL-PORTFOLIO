"use client";

import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const certificationsData = [
    {
        title: "Salesforce AI Associate",
        issuer: "Salesforce",
        date: "October 22, 2024",
        image: "/about/salesforce-cert.png",
        description: "Validates foundational knowledge of AI across Salesforce's products and services.",
        skills: ["Artificial Intelligence", "Salesforce", "Generative AI"],
        credentialLink: "https://drive.google.com/file/d/17px2aCmgOVM3k6l1mm_N8iiPxyGH8SmH/view?usp=sharing"
    },
    {
        title: "Google Data Analytics",
        issuer: "Google",
        date: "2023",
        image: "/about/google-cert-real.png",
        description: "Competent in tools and platforms including spreadsheets, SQL, Tableau, and R. Know how to prepare, process, analyze, and share data for thoughtful action.",
        skills: ["Spreadsheets", "SQL", "Tableau", "R", "Data Analytics"],
        credentialLink: "https://media.licdn.com/dms/document/media/v2/D562DAQGV2LGWxnoqdg/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1708694934670?e=1767225600&v=beta&t=NYWLhPO_OfgYFemq3yyKsaiC0XhoqJkXrqS-JGZtURk"
    },
    {
        title: "Full Stack Data Science Program",
        issuer: "AlmaBetter",
        date: "2024",
        image: "/about/almabetter-cert.png",
        description: "Successful completion of the Full Stack Data Science Specialization Program offered by AlmaBetter.",
        skills: ["Python", "Machine Learning", "Data Science", "Analytics"],
        credentialLink: "https://media.licdn.com/dms/document/media/v2/D562DAQERMGfh_Y4-LA/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1708688109822?e=1767225600&v=beta&t=zM1KkyoSi71Bvl2hsB9sXh0w_4K1moq6_EudyUTyaaU"
    },
    {
        title: "IBM Data Analyst",
        issuer: "IBM",
        date: "2023",
        image: "/about/ibm-cert-real.png",
        description: "This IBM Professional Certificate is earned after successfully completing 9 courses on various topics in Data Analytics. The learner understands the core principles of data analysis and has worked hands-on with a variety of data sources, project scenarios, and data analysis tools, including Excel, SQL, Relational Databases, Python, Jupyter Notebooks, and Cognos Analytics, gaining practical experience with data manipulation, data analysis, and data visualization.",
        skills: ["Excel", "SQL", "Python", "Cognos Analytics", "Data Analysis"],
        credentialLink: "http://media.licdn.com/dms/document/media/v2/D562DAQFFc8J_Hot-Ug/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1708689945896?e=1767225600&v=beta&t=IBl42oExX41PV-sxT-6OD1FSFw7rKMEGWjLnJLYFHTs"
    },
    {
        title: "Cyber Security Awareness Training",
        issuer: "Blue Star",
        date: "2024",
        image: "/about/bluestar-cert.png",
        description: "Successfully completed the corporate Cyber Security Awareness Training.",
        skills: ["Cyber Security", "Security Awareness", "Compliance"],
        credentialLink: "https://media.licdn.com/dms/document/media/v2/D561FAQGKpyt4J5VyjA/feedshare-document-pdf-analyzed/B56ZqHlQIlI8AY-/0/1763211282885?e=1767225600&v=beta&t=tDikKeFI1Yv8jzvWN8yl5e1EFxC3Npiz-0KKnDy8qjk"
    }
];

const Certifications = () => {
    return (
        <section id='certifications' className="py-16 xl:py-24 relative overflow-hidden">
            {/* Background Decoration for Glass Effect */}
            {/* Background Decoration for Glass Effect */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 xl:mb-20"
                >
                    <h2 className="section-title mb-4 text-center mx-auto">Certifications</h2>
                    <p className="subtitle max-w-2xl mx-auto">Validating expertise through industry-recognized achievements.</p>
                </motion.div>

                <div className="xl:mx-0">
                    <Swiper
                        className="h-[380px] w-full py-2 pb-10" // Reduced height
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2
                            },
                            1024: {
                                slidesPerView: 3
                            }
                        }}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                    >
                        {certificationsData.map((cert, index) => (
                            <SwiperSlide key={index} className="h-full">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <div className="h-full cursor-pointer hover:scale-[1.02] transition-transform duration-300">
                                            <Card className="h-full flex flex-col overflow-hidden bg-white/5 backdrop-blur-md border border-border/50 hover:border-border transition-colors relative group">
                                                {/* Glass Shine Effect */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none" />

                                                <CardHeader className="p-0 z-10">
                                                    <div className="relative w-full h-[120px] bg-secondary/10 flex items-center justify-center overflow-hidden">
                                                        {cert.image ? (
                                                            <Image
                                                                src={cert.image}
                                                                alt={cert.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 hover:scale-105"
                                                            />
                                                        ) : (
                                                            <div className="text-muted-foreground">No Image</div>
                                                        )}
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="flex-1 p-4 flex flex-col gap-2">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <CardTitle className="text-base mb-1 line-clamp-2">{cert.title}</CardTitle>
                                                            <div className="text-muted-foreground text-xs font-medium">
                                                                {cert.issuer}
                                                            </div>
                                                        </div>
                                                        <Badge variant="outline" className="flex items-center gap-1 shrink-0 text-[10px] px-1 py-0 h-5">
                                                            <Calendar className="w-3 h-3" /> {cert.date}
                                                        </Badge>
                                                    </div>

                                                    <div className="flex flex-wrap gap-1 mt-auto">
                                                        {cert.skills.slice(0, 3).map((skill, i) => (
                                                            <Badge key={i} variant="secondary" className="text-[10px] px-1 h-5">
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </CardContent>
                                                <CardFooter className="p-4 pt-0 flex justify-end">
                                                    <Button size="sm" className="gap-2 h-8 text-xs group-hover:bg-primary/90">
                                                        View Details
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </div>
                                    </DialogTrigger>

                                    <DialogContent className="sm:max-w-[625px] overflow-hidden bg-background/80 backdrop-blur-xl border-primary/20">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl">{cert.title}</DialogTitle>
                                            <DialogDescription className="text-base">
                                                {cert.issuer} • {cert.date}
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="grid gap-6 py-4">
                                            <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-secondary/10 flex items-center justify-center">
                                                {cert.image && (
                                                    <Image
                                                        src={cert.image}
                                                        alt={cert.title}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                )}
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <h4 className="text-sm font-medium mb-2">Description</h4>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {cert.description}
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-sm font-medium mb-2">Skills Verified</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {cert.skills.map((skill, i) => (
                                                            <Badge key={i} variant="secondary">
                                                                {skill}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-end pt-2">
                                                <Link href={cert.credentialLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md font-medium text-sm transition-colors">
                                                    Verify Credential <ExternalLink className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
