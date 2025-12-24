'use client';

import Image from "next/image";
import { Mail, Phone, MapPin, Calendar, Smartphone, ChevronDown } from "lucide-react";
import { useState } from "react";
import Socials from "@/components/Socials";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside className="sticky top-0 h-auto md:h-screen w-full md:w-[320px] lg:w-[360px] p-4 flex flex-col z-40">
            <div className="md:h-[95%] w-full bg-[#1e1e1f] border border-[#383838] rounded-[30px] p-8 shadow-2xl flex flex-col items-center relative overflow-hidden transition-all duration-300">

                {/* Avatar */}
                <div className="relative w-[150px] h-[150px] mb-6 rounded-[30px] overflow-hidden bg-[#2b2b2c] shadow-lg">
                    <Image
                        src="/about/developer3.png"
                        alt="Abhishek Das"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Identity */}
                <h1 className="text-3xl font-bold mb-4 tracking-wide text-white">Abhishek Das</h1>
                <div className="bg-[#2b2b2c] px-5 py-2 rounded-lg mb-8">
                    <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Data Analyst</span>
                </div>

                {/* Mobile Toggle for Contacts */}
                <button
                    onClick={toggleSidebar}
                    className="absolute top-0 right-0 rounded-bl-[20px] rounded-tr-[20px] bg-[#2b2b2c] border-l border-b border-[#383838] text-[#ffdb70] hover:text-primary p-3 md:hidden transition-colors"
                >
                    <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className="w-full h-[1px] bg-[#383838] mb-8"></div>

                {/* Contacts List */}
                <div className={`w-full flex flex-col gap-6 transition-all duration-500 ease-in-out md:max-h-[500px] md:opacity-100 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} md:overflow-visible`}>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#2b2b2c] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center text-[#ffdb70] shrink-0">
                            <Mail size={20} />
                        </div>
                        <div className="text-left overflow-hidden">
                            <p className="text-xs text-white/50 uppercase font-medium mb-1">Email</p>
                            <a href="mailto:abhishekdas90909@gmail.com" className="text-sm font-medium text-white hover:text-[#ffdb70] transition-colors truncate block" title="abhishekdas90909@gmail.com">abhishekdas90909...</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#2b2b2c] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center text-[#ffdb70] shrink-0">
                            <Smartphone size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-white/50 uppercase font-medium mb-1">Phone</p>
                            <a href="tel:+916371096736" className="text-sm font-medium text-white hover:text-[#ffdb70] transition-colors">+91 6371096736</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#2b2b2c] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center text-[#ffdb70] shrink-0">
                            <Calendar size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-white/50 uppercase font-medium mb-1">Birthday</p>
                            <p className="text-sm font-medium text-white">August 19, 1998</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#2b2b2c] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center text-[#ffdb70] shrink-0">
                            <MapPin size={20} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-white/50 uppercase font-medium mb-1">Location</p>
                            <p className="text-sm font-medium text-white leading-tight">Sambalpur, Odisha, India</p>
                        </div>
                    </div>
                </div>

                <div className="md:mt-auto pt-8 w-full flex justify-center">
                    <Socials
                        containerStyles="flex gap-4"
                        iconsStyles="text-white/70 hover:text-[#ffdb70] transition-colors duration-300 text-xl"
                    />
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;
