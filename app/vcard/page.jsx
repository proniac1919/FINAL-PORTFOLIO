'use client';

import { useState } from 'react';
import Sidebar from '@/components/VCard/Sidebar';
import Navigation from '@/components/VCard/Navigation';
import AboutTab from '@/components/VCard/tabs/AboutTab';
import ResumeTab from '@/components/VCard/tabs/ResumeTab';
import PortfolioTab from '@/components/VCard/tabs/PortfolioTab';
import { AnimatePresence, motion } from 'framer-motion';

const VCardPage = () => {
    const [activeTab, setActiveTab] = useState('about');

    const renderContent = () => {
        switch (activeTab) {
            case 'about': return <AboutTab />;
            case 'resume': return <ResumeTab />;
            case 'portfolio': return <PortfolioTab />;
            default: return <AboutTab />;
        }
    };

    return (
        <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-[#ffdb70]/30 selection:text-[#ffdb70]">

            <div className="container mx-auto max-w-[1250px] relative z-10 flex flex-col md:flex-row gap-6 p-4 md:py-12 lg:py-20 h-auto md:h-screen transition-all">

                {/* Sidebar */}
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-1 bg-[#1e1e1f] border border-[#383838] rounded-[30px] relative overflow-hidden flex flex-col shadow-2xl min-h-[600px] md:h-auto">

                    <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

                    <div className="flex-1 overflow-y-auto p-6 md:p-10 scrollbar-hide pt-20 md:pt-24 custom-scrollbar">
                        <AnimatePresence mode="wait">
                            {renderContent()}
                        </AnimatePresence>
                    </div>

                </main>
            </div>
        </div>
    );
};

export default VCardPage;
