import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send, BriefcaseBusiness } from "lucide-react";

import Image from "next/image";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import GlitchText from "./VFX/GlitchText";
import Terminal from "./Terminal";

const Hero = () => {
  return (
    <section id='home' className="py-12 xl:pb-24 xl:pt-24 min-h-[84vh] h-auto relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-hero bg-no-repeat bg-bottom bg-cover dark:hidden"></div>

      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left z-10">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] animate-fade-in-up">Data Engineer & Architect</div>
            <h1 className='h1 mb-4 animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
              Turning Raw Data into <br />
              <GlitchText text="Actionable Intelligence" className="text-primary" />
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>I design scalable data pipelines, optimize ETL workflows, and transform complex datasets into clear, strategic insights.</p>
            <div className="flex flex-row gap-x-4 mx-auto xl:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button asChild className="gap-x-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-white/90 text-white dark:text-black rounded-full px-5 py-2 min-w-[130px] h-[48px] text-sm transition-all duration-300 shadow-lg group">
                <Link href='/contact'>
                  Contact Me <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant='outline' className="gap-x-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl text-foreground dark:text-white rounded-full px-5 py-2 min-w-[130px] h-[48px] text-sm transition-all duration-300">
                <Link href='https://abhishek-das-onlinecv.netlify.app/' target="_blank" rel="noopener noreferrer" aria-label="View my online CV (opens in new tab)">
                  Online CV  <BriefcaseBusiness className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant='outline' className="gap-x-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/5 border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl text-foreground dark:text-white rounded-full px-5 py-2 min-w-[130px] h-[48px] text-sm transition-all duration-300">
                <Link href='https://drive.google.com/file/d/1HbeMppJmMVljPfdM7i_07HbhmM1y3NLy/preview' target="_blank" rel="noopener noreferrer" aria-label="Download my resume (opens in new tab)">
                  Resume <Download className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <Socials
              containerStyles='flex gap-x-6 mx-auto xl:mx-0 animate-fade-in-up'
              iconsStyles='text-foreground text-[30px] hover:text-primary transition-all hover:scale-110 duration-300'
              style={{ animationDelay: '0.4s' }} />
          </div>
          <div className='hidden xl:flex relative animate-fade-in-up' style={{ animationDelay: '0.5s' }}>
            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2 opacity-50 dark:opacity-100 mix-blend-screen'></div>
            <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer1.png' />
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center gap-x-8 w-full max-w-[1000px] mx-auto mt-12 animate-fade-in-up relative z-10" style={{ animationDelay: '0.6s' }}>
          {/* Left Badge: Experience */}
          <Badge
            ContainerStyles='relative bg-white/10 dark:bg-zinc-900/50 backdrop-blur-md p-4 rounded-xl border border-black/10 dark:border-white/10 shadow-2xl min-w-[240px] animate-float absolute -left-[2rem] top-12'
            icon={<RiBriefcase4Fill />}
            endCountNum={3}
            endCountText='+'
            badgeText='Years Of Experience'
          />

          {/* Terminal */}
          <div className="w-full max-w-[600px] mx-auto">
            <Terminal />
          </div>

          {/* Right Badge: Projects */}
          <Badge
            ContainerStyles='relative bg-white/10 dark:bg-zinc-900/50 backdrop-blur-md p-4 rounded-xl border border-black/10 dark:border-white/10 shadow-2xl min-w-[240px] animate-float absolute -right-[2rem] top-12'
            icon={<RiTodoFill />}
            endCountNum={25}
            endCountText='+'
            badgeText='Completed Projects'
          />
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
}

export default Hero
