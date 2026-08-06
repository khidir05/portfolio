import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { motion } from "framer-motion";
import Navbar from "../Navbar"; 
import Footer from "../Footer";

const BersinarIntiGlobal = () => {
  return (
    <main className="w-full min-h-screen font-bodyFont bg-bodyColor text-textLight selection:bg-textGreen selection:text-bodyColor">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 flex flex-col gap-10">
        
        {/* Tombol Back */}
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="/#projects" 
          className="text-textGreen font-mono text-sm hover:underline flex items-center gap-2 w-fit"
        >
          ← Back to Home
        </motion.a>

        {/* Header Proyek */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-textLight mb-6">
            Landing Page PT Bersinar Inti Global, Karawang
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-textDark font-mono text-sm">
            <p>Role: <span className="text-textGreen">Frontend Developer</span></p>
            <p>Timeline: <span className="text-textGreen">2025</span></p>
            <div className="flex gap-4">
              <a href="https://bersinarintiglobal.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-textGreen transition-colors">
                <RxOpenInNewWindow className="text-lg"/> Live Site
              </a>
            </div>
          </div>
        </motion.div>

        {/* Hero Image Proyek */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[600px] aspect-[4/3] mx-auto relative overflow-hidden rounded-xl shadow-2xl border border-gray-800 bg-[#0A192F]/50 flex items-center justify-center"
        >
          {/* Blurred Backdrop for varying aspect ratios */}
          <img 
            src="/project/bersinarintiglobal1.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-25 scale-110"
          />
          <img 
            src="/project/bersinarintiglobal1.jpg" 
            alt="PT Bersinar Inti Global Landing Page" 
            className="relative z-10 max-w-full max-h-full object-contain p-4"
          />
        </motion.div>

        {/* Konten Case Study */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-textDark text-base md:text-lg leading-relaxed flex flex-col gap-6"
        >
          <h2 className="text-2xl font-bold text-textLight mt-4">Project Overview</h2>
          <p>
            PT Bersinar Inti Global is an industrial services provider based in Karawang. The landing page development focused on delivering an immersive visual experience that reflects their expertise in industrial electrical engineering and utility installation solutions.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">The Challenge</h2>
          <p>
            Standard CMS templates often lack the precision and custom branding feel that industrial leaders demand. The challenge was to implement deep customizations and complex visual animations that go beyond typical content management system structures, while maintaining high performance, lightning-fast load times, and a completely responsive layouts.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">Technologies Used</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 text-textLight font-mono text-sm">
            <li>Laravel - For a robust backend foundation and reliable server rendering</li>
            <li>Tailwind CSS - For complex layout styling and high-performance design tokens</li>
            <li>JavaScript - For interactive elements and animated scrolling behaviors</li>
            <li>Framer Motion - To implement elegant, fluid micro-interactions and scroll-triggered animations</li>
          </ul>

          <h2 className="text-2xl font-bold text-textLight mt-4">Solution & Impact</h2>
          <p>
            By avoiding bloated frameworks and utilizing a clean, custom-structured Laravel ecosystem, I built a highly responsive, custom company profile page. The integration of modern typography and animations resulted in a premium look that has successfully improved corporate credibility and client conversion rates.
          </p>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
};

export default BersinarIntiGlobal;
