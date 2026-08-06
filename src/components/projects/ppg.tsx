import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import Navbar from "../Navbar"; 
import Footer from "../Footer";

const Ppg = () => {
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
            PPG (Penggerak Pembina Generus) Cilacap Educational System
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-textDark font-mono text-sm">
            <p>Role: <span className="text-textGreen">System Developer (Curriculum Team)</span></p>
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
            src="/project/ppg1.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-25 scale-110"
          />
          <img 
            src="/project/ppg1.jpg" 
            alt="PPG Cilacap Educational Management System" 
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
            PPG Cilacap is a youth-focused educational and character-building organization under the LDII in Cilacap, Indonesia. As a member of the Curriculum Team, I designed and built this system to monitor educational indicators, teacher metrics, and student tracking across various branches.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">The Challenge</h2>
          <p>
            Historically, progress reports and evaluations were sent as manual estimates or guesswork without structured data backing. This lack of precision made it extremely difficult for coordinators to identify which classes were struggling or analyze student attendance trends effectively.
          </p>

          <h2 className="text-2xl font-bold text-textLight mt-4">Technologies Used</h2>
          <ul className="list-disc list-inside ml-4 space-y-2 text-textLight font-mono text-sm">
            <li>Laravel - For a robust server foundation with complex role hierarchies</li>
            <li>React - For a dynamic data entry and reporting interface</li>
            <li>Tailwind CSS - For modern UI layout styling</li>
            <li>MySQL - For relational storage of students, teachers, classes, and attendance logs</li>
          </ul>

          <h2 className="text-2xl font-bold text-textLight mt-4">Solution & Impact</h2>
          <p>
            I created a system that serves as a single source of truth for the curriculum team. Key features implemented include:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-textDark">
            <li><span className="text-textLight font-semibold">Educational Progress Indicators:</span> Concrete metrics tracking curriculum coverage and exam scores.</li>
            <li><span className="text-textLight font-semibold">Attendance Tracker:</span> Real-time attendance logging for both students and teachers.</li>
            <li><span className="text-textLight font-semibold">Interconnected Role Hierarchy:</span> Access control defined by scopes, levels, and administrative roles to keep data secure and organized.</li>
          </ul>
        </motion.div>

      </div>

      <Footer />
    </main>
  );
};

export default Ppg;
