import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import Navbar from "../Navbar"; 
import Footer from "../Footer";

const JelantahHub = () => {
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
            JelantahHub Management System
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-textDark font-mono text-sm">
            <p>Role: <span className="text-textGreen">Software & Server Developer</span></p>
            <p>Timeline: <span className="text-textGreen">2025</span></p>
            <div className="flex gap-4">
              <a href="https://github.com/khidir05" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-textGreen transition-colors">
                <TbBrandGithub className="text-lg"/> GitHub
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
            src="/project/jelantahub1.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-25 scale-110"
          />
          <img 
            src="/project/jelantahub1.jpg" 
            alt="JelantahHub Management System" 
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
            JelantahHub is a community-focused software ecosystem designed to manage the tracking, collection logistics, and recycling workflow of used cooking oil (minyak jelantah). This initiative supports green energy initiatives by converting waste into biodiesel resources.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">The Challenge</h2>
          <p>
            To build a community-driven application, the user experience had to be seamless across mobile screens, and the server had to process data in real-time. Additionally, integrating hardware sensor data from community waste deposit containers required a highly responsive backend that could validate and record collections automatically.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">Technologies Used</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 text-textLight font-mono text-sm">
            <li>NestJS - For a high-performance, modular backend server framework</li>
            <li>ReactJS - For the mobile-responsive progressive web app (PWA) client</li>
            <li>PostgreSQL - For storing complex collection transactions and user account levels</li>
            <li>IoT Integration - Webhook triggers and API endpoints for communication with connected scales/deposit boxes</li>
          </ul>

          <h2 className="text-2xl font-bold text-textLight mt-4">Solution & Impact</h2>
          <p>
            As the Software & Server Developer, I successfully integrated the IoT devices with the backend database, enabling residents to log in, view deposit history, check balances, and receive real-time credit updates. This platform has digitized the community waste recycling chain and increased direct environmental conservation participation.
          </p>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
};

export default JelantahHub;
