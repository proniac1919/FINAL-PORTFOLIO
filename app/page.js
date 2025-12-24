'use client';
import { useEffect } from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Certifications from "@/components/Certifications";
import Work from "@/components/Work";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return <main>
    <Hero />
    <About />
    <Services />
    <Certifications />
    <Work />
    <Cta />
  </main>;
}
