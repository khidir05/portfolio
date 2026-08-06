import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import Navbar from "../Navbar"; 
import Footer from "../Footer";

const Drpkp = () => {
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
            DRPKP Jakarta Inventory Management System
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-textDark font-mono text-sm">
            <p>Role: <span className="text-textGreen">Full-Stack Developer</span></p>
            <p>Timeline: <span className="text-textGreen">2024 (2.5 Months)</span></p>
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
            src="/project/drpkp1.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-25 scale-110"
          />
          <img 
            src="/project/drpkp1.jpg" 
            alt="DRPKP Jakarta Inventory Management System" 
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
            This project involved developing an independent, comprehensive Warehouse Inventory Management System currently ready for deployment at a government agency in DKI Jakarta (DRPKP - Dinas Perumahan Rakyat dan Kawasan Permukiman). Completed independently in just 2.5 months, the system serves as a scalable solution for public sector resource management.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">The Challenge</h2>
          <p>
            Handling critical governmental operations requires strict security, multi-role hierarchies, and seamless workflows. The challenge lay in designing a complex multi-role structure—including Administrators, Warehouse Heads, and Staff—to ensure that item requests, stock tracking, and approval processes are transparent, efficient, and prevent any bottleneck.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">Technologies Used</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 text-textLight font-mono text-sm">
            <li>Laravel - To build a secure, structured backend REST API</li>
            <li>React - For a dynamic, high-performance user interface</li>
            <li>MySQL - For reliable, structured relational database storage</li>
            <li>Tailwind CSS - For modern and responsive layout styling</li>
          </ul>

          <h2 className="text-2xl font-bold text-textLight mt-4">Key Features & Results</h2>
          <p>
            The final multi-platform web application optimizes stock tracking, simplifies loan/item request management, and features automated procurement forms that eliminate manual administration overhead. It delivers a transparent audit trail that enhances agency productivity and reporting speed.
          </p>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
};

export default Drpkp;
