import { FilePieChart, FlaskConical, LineChart } from 'lucide-react';
import { motion } from "framer-motion";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const serviceData = [
    {
        icon: <FilePieChart size={72} strokeWidth={0.8} />,
        title: 'Data Analysis',
        description: 'Comprehensive data analysis services, including exploration, visualization, predictive modeling, and insights for decision-making.'
    },
    {
        icon: <FlaskConical size={72} strokeWidth={0.8} />,
        title: 'A/B Testing',
        description: 'Facilitated with A/B testing services to optimize strategies by comparing effectiveness and making data-driven recommendations.'
    },
    {
        icon: <LineChart size={72} strokeWidth={0.8} />,
        title: 'Performance Tracking & Reporting',
        description: 'Provide Performance Tracking and Reporting services, monitoring KPIs and generating insightful reports for decision-making.'
    },

]
const Services = () => {
    return <section id='services' className='mb-12 xl:mb-36 scroll-mt-28'>
        <div className="container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 xl:mb-24"
            >
                <h2 className="section-title mb-4 mx-auto justify-center">My Services</h2>
                <p className="subtitle max-w-2xl mx-auto">
                    Delivering data-driven solutions to optimize business performance.
                </p>
            </motion.div>
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {serviceData.map((item, index) => {
                    return (
                        <Card className='glass w-full max-w-[424px] cursor-pointer hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:-translate-y-2 flex flex-col pt-16 pb-10 justify-center items-center relative border-none' key={index}>
                            <CardHeader className='text-primary absolute -top-[60px]'>
                                <div className='w-[140px] h-[80px] bg-white/10 dark:bg-black/20 backdrop-blur-lg flex justify-center items-center rounded-3xl shadow-lg border-t border-white/20 ml-2'>
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className='text-center'>
                                <CardTitle className='mb-4 text-2xl font-bold'>{item.title}
                                </CardTitle>
                                <CardDescription className='text-lg leading-relaxed dark:text-gray-300'>
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    </section>;

}

export default Services