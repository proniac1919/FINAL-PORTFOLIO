import { Button } from './ui/button';
import { motion } from "framer-motion";
import Link from 'next/link';

const Cta = () => {

    return (
        <section className='py-24 bg-tertiary dark:bg-secondary/40'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8"
                    >
                        <h2 className='section-title mb-4'>Communication is the key to connection.</h2>
                        <p className='subtitle max-w-xl mx-auto'>Reach out to me today and let's unlock possibilities together.</p>
                    </motion.div>
                    <Link href='/contact'>
                        <Button>Contact me</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default Cta;