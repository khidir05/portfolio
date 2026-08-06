import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import Navbar from "../Navbar"; 
import Footer from "../Footer";

const Siperus = () => {
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
            SIPERUS (Sistem Informasi Persediaan Rumah Susun)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-textDark font-mono text-sm">
            <p>Role: <span className="text-textGreen">Lead Developer</span></p>
            <p>Timeline: <span className="text-textGreen">2026</span></p>
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
            src="/project/siperus1.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-25 scale-110"
          />
          <img 
            src="/project/siperus1.jpg" 
            alt="SIPERUS Management System" 
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
            SIPERUS is a next-generation housing inventory information system built for regional housing authorities in DKI Jakarta. It is a completely revised and optimized version of the initial DPRKP warehouse application, featuring a redesigned architecture to accommodate large-scale distribution operations.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">The Challenge</h2>
          <p>
            The original system was constrained to single-warehouse tracking and had basic manual approval mechanisms. With multiple housing complexes and sub-warehouses, the administrative department required automated low-stock warnings, cross-facility supply transfers, and official permit application routing.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">Technologies Used</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 text-textLight font-mono text-sm">
            <li>Laravel - For a robust, modular REST API and backend business logic</li>
            <li>React - For a reactive, state-managed admin panel UI</li>
            <li>MySQL - For structured data relations across multiple sub-warehouses</li>
            <li>Tailwind CSS - For the dashboard grid and dark mode presentation</li>
          </ul>

          <h2 className="text-2xl font-bold text-textLight mt-4">Solution & Impact</h2>
          <p>
            I led the architectural rewrite to support distributed multi-warehouse inventories. We introduced:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-textDark">
            <li><span className="text-textLight font-semibold">Multi-Warehouse Inventory Tracking:</span> Real-time asset location monitoring.</li>
            <li><span className="text-textLight font-semibold">Permit Application Portal:</span> Digital submission and approval of item permits.</li>
            <li><span className="text-textLight font-semibold">Automated Low-Stock Notifications:</span> Proactive alerts when supplies fall below a safe threshold, mitigating procurement delays.</li>
          </ul>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
};

export default Siperus;
