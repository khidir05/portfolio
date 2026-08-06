import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar"; 
import Footer from "../Footer";

const AdyTeknik = () => {
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
            Integrated Operational Management System CV Ady Teknik
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-textDark font-mono text-sm">
            <p>Role: <span className="text-textGreen">Full-Stack Developer</span></p>
            <p>Timeline: <span className="text-textGreen">2026</span></p>
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
            src="/project/adyteknik1.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-25 scale-110"
          />
          <img 
            src="/project/adyteknik1.jpg" 
            alt="CV Ady Teknik Management System" 
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
            CV Ady Teknik is a technical service and contracting provider specializing in HVAC systems in Karawang. At the beginning of 2026, I was commissioned to develop an integrated operational management system designed to coordinate field operations, improve workforce management, and optimize complex billing workflows.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">The Challenge</h2>
          <p>
            Prior to this development, CV Ady Teknik managed field assignments, technician attendance, and invoicing manually. This manual process led to data fragmentation, delays in customer follow-ups, and inefficiencies in dispatcher routing, which ultimately affected service capacity.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">Technologies Used</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 text-textLight font-mono text-sm">
            <li>Laravel - For a robust, transaction-safe backend API</li>
            <li>React - For a dynamic dispatcher dashboard and responsive technician interfaces</li>
            <li>PostgreSQL - For storing relational data securely, specifically spatial technician logs</li>
            <li>Google Cloud Maps API - For location geocoding and routing calculation</li>
          </ul>

          <h2 className="text-2xl font-bold text-textLight mt-4">Key Features & Results</h2>
          <p>
            The system successfully boosted business efficiency by automating several critical modules:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-textDark">
            <li><span className="text-textLight font-semibold">Financial Management:</span> Streamlined bookkeeping, expenses, and instant digital invoicing.</li>
            <li><span className="text-textLight font-semibold">Automated Maintenance Reminders:</span> Automatically notifies customers of scheduled HVAC tune-ups via integrated notification triggers.</li>
            <li><span className="text-textLight font-semibold">Route Optimization System:</span> A custom routing algorithm using mapping coordinates helps field technicians find the fastest paths between service stops, maximizing field productivity and customer satisfaction.</li>
          </ul>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
};

export default AdyTeknik;