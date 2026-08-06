import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMail, IoCall, IoLogoWhatsapp } from "react-icons/io5";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { Link } from "react-router-dom";

const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(" ");

const SectionTitle = ({ title, titleNo }: { title: string; titleNo: string }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="font-titleFont text-2xl md:text-3xl font-semibold flex items-center w-full"
  >
    <span className="text-base md:text-xl text-textGreen mr-3 font-mono">0{titleNo}.</span>
    <span className="text-textLight">{title}</span>
    <span className="hidden md:inline-flex flex-grow h-[1px] bg-gray-700 ml-6 max-w-[300px]"></span>
  </motion.h2>
);

const Index = () => {
  const [activeExp, setActiveExp] = useState(0);

  const techStack = [
    "JavaScript (ES6+)", "TypeScript", "React / Next.js", "Tailwind CSS", 
    "Laravel", "NestJS", "PostgreSQL", "MySQL", "IoT Integration", "Electrical Engineering"
  ];

  const experiences = [
    { label: "At Home", title: "Independent Developer", date: "Present", details: "Focusing on mastering full-stack capabilities while consistently building new ones. Leveraging AI to accelerate learning and problem-solving. Also there are others activity like electrical engineering, repairman,and seller" },
    { label: "PC LDII", title: "Technology Educator", date: "2023 - Present", details: "Balancing roles as a student and educator, teaching practical technology skills and mentoring youth." },
    { label: "Lentera Sinar", title: "Contributor", date: "2024", details: "Actively building a portfolio of digital and non-digital businesses to turn conceptual ideas into reality." },
    { label: "CV. Ady Teknik", title: "System Developer", date: "2026", details: "Developing a comprehensive internal management system including finance, inventory, and human resource modules." },
    { label: "PT Nocola", title: "IoT Intern", date: "Previous", details: "Engaged in hardware and electrical systems integration, gaining hands-on experience with embedded systems." },
    { label: "Anak Bangsa", title: "Community Lead", date: "Ongoing", details: "Managing community projects and tech-driven youth development initiatives." }
  ];

  // Data Project
  const projects = [
    { 
      title: "DRPKP Jakarta Inventory Management System", 
      description: "Successfully developed an independent Warehouse Inventory Management System currently ready for deployment at a government agency in DKI Jakarta. Built using Laravel, React, and MySQL, this multi-platform web application optimizes critical operations such as stock tracking, loan management, and automated procurement forms. Despite being my first major application project—completed within 2.5 months—it features a complex multi-role structure (Admin, Warehouse Head, and Staff) to ensure an efficient, transparent, and scalable workflow.", 
      image: "/project/drpkp1.jpg", 
      tech: ["Laravel", "React", "MySQL", "Tailwind CSS"], 
      githubLink: "https://github.com/khidir05",
      detailLink: "/projects/drpkp" 
    },
    { 
      title: "Landing Page PT Bersinar Inti Global, Karawang", 
      description: "The landing page development for PT Bersinar Inti Global focuses on delivering an immersive visual experience. Utilizing the Laravel ecosystem, I successfully implemented deep customizations and complex visual animations that go beyond the limitations of standard CMS platforms, while maintaining a clean and scalable codebase.", 
      image: "/project/bersinarintiglobal1.jpg", 
      tech: ["Laravel", "Tailwind CSS", "JavaScript", "Framer Motion"], 
      liveLink: "https://bersinarintiglobal.com",
      detailLink: "/projects/bersinar-inti-global" 
    },
    { 
      title: "Integrated Operational Management System CV Ady Teknik, Karawang", 
      description: "At the beginning of 2026, I was entrusted to develop an integrated operational management system for CV Ady Teknik, an AC service company based in Karawang. Leveraging the synergy of Laravel and React, this application is designed to boost business efficiency through financial management, automated customer maintenance reminders, and organized technician scheduling. A key feature I implemented is the route optimization system, which helps technicians find the fastest paths to maximize field effectiveness and service quality.", 
      image: "/project/adyteknik1.jpg", 
      tech: ["Laravel", "React", "PostgreSQL", "Google Cloud API"], 
      detailLink: "/projects/ady-teknik" 
    },
    { 
      title: "JelantahHub Management System", 
      description: "A web-based mobile application dedicated to the waste cooking oil management ecosystem. As the Software & Server Developer, I am building the backend using NestJS and the frontend with ReactJS. My primary focus is integrating IoT devices with the server to create an interactive platform that empowers the community to participate directly in environmental preservation.", 
      image: "/project/jelantahub1.jpg", 
      tech: ["NestJS", "ReactJS", "PostgreSQL", "IoT"], 
      githubLink: "https://github.com/khidir05",
      detailLink: "/projects/jelantahhub" 
    },
    { 
      title: "SIPERUS (Sistem Informasi Persediaan Rumah Susun)", 
      description: "Siperus is a revised version of the previous DKI DPRKP project, with several revised features, naming, and architecture. Siperus focuses more on inventory management across multiple warehouses, permit applications, and out-of-stock notifications.", 
      image: "/project/siperus1.jpg", 
      tech: ["Laravel", "React", "MySQL", "Tailwind CSS"], 
      githubLink: "https://github.com/khidir05",
      detailLink: "/projects/siperus" 
    },
    { 
      title: "PPG (Penggerak Pembina Generus) Cilacap Management System", 
      description: "I managed to solve my problem by creating this system. As a member of the Curriculum Team at PPG (a youth-focused organization within a LDII, One of organization in Indonesia), I often received reports that were merely guesswork or estimates, not based on data, and without any evidence related to educational progress. I created a system that could monitor student learning progress indicators, teacher attendance, and student attendance, which also affect learning progress. Finally, I created a system that was interconnected within PPG with the concept of scope, levels, and roles.", 
      image: "/project/ppg1.jpg", 
      tech: ["Laravel", "React", "Tailwind CSS", "MySQL"], 
      githubLink: "https://github.com/khidir05",
      detailLink: "/projects/ppg-cilacap" 
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-4 flex flex-col gap-20 lg:gap-32">
      
      {/* 0. Home / Banner */}
      <section id="home" className="min-h-[85vh] flex flex-col lg:flex-row items-center justify-between py-10 pt-20 gap-10 lg:gap-12">
        
        {/* Kolom Kiri: Teks & Foto Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-3/5 flex flex-col gap-5 text-left items-start"
        >
          <p className="text-lg md:text-xl text-textGreen font-mono tracking-wide">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-textLight tracking-tight">Khidir Afwan Amlabar.</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-textDark mt-1">Fullstack Developer | Data Entry | Electrical Engineering | Project Manager</h2>
          
          {/* FOTO UNTUK MOBILE: Tampil di tengah teks hanya pada HP/Tablet (lg:hidden) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full flex justify-center lg:hidden my-8"
          >
            <div className="relative w-64 h-64 md:w-[320px] md:h-[320px] group">
              <div className="absolute inset-0 border-2 border-textGreen rounded-xl translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-0"></div>
              <img 
                className="absolute inset-0 w-full h-full object-cover rounded-xl z-10 shadow-xl" 
                src="/assets/images/1.jpg" 
                alt="Khidir Profile" 
              />
            </div>
          </motion.div>

          {/* Lanjutan Teks */}
          <p className="text-base md:text-lg text-textDark font-medium max-w-2xl leading-relaxed mt-2 lg:mt-4">
A Detail-oriented Informatics Engineering graduate and Frontend Engineer with comprehensive experience in full-stack web development and software quality assurance. Proficient in building responsive user interfaces using React, JavaScript, and modern frameworks, with a strong understanding of API integration and system optimization. Proven track record of delivering clean, production-ready code through agile development and rigorous testing methodologies.          </p>
          <a href="https://github.com/khidir05" target="_blank" rel="noreferrer" className="mt-4 lg:mt-8">
            <button className="px-8 py-4 border border-textGreen rounded text-textGreen font-mono text-sm hover:bg-textGreen/10 transition-colors duration-300">
              Check out my projects!
            </button>
          </a>
        </motion.div>

        {/* Kolom Kanan: FOTO UNTUK DESKTOP (Sembunyi di HP, tampil di layar besar) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:flex w-full lg:w-2/5 justify-end"
        >
          <div className="relative w-[380px] h-[380px] group">
            <div className="absolute inset-0 border-2 border-textGreen rounded-xl translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3 z-0"></div>
            <img 
              className="absolute inset-0 w-full h-full object-cover rounded-xl z-10 shadow-xl" 
              src="/assets/images/1.jpg" 
              alt="Khidir Profile" 
            />
          </div>
        </motion.div>
      </section>

      {/* 01. About */}
      <section id="about" className="pt-24 scroll-mt-10">
        <SectionTitle title="About Me" titleNo="1" />
        <div className="flex flex-col gap-10 mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-xl border border-textGreen/30"
          >
            <iframe 
               className="w-full h-full"
               src="https://www.youtube-nocookie.com/embed/GXNHuBG1xL8?si=wgXIgsvWABm00rfL" 
               title="Expert System Presentation" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full text-textDark flex flex-col gap-6 text-base md:text-lg leading-relaxed text-left"
          >
            <p>I am a Diploma student in Informatics Engineering at the State Polytechnic of Cilacap, with a strong interest in hardware integration and electrical systems. Alongside my academic background, I have gained practical experience as a freelance web developer and developed an entrepreneurial mindset by establishing and managing a herbal beverage business.</p>
            <p>As a multi-talented individual, I combine a strong passion for learning with a structured mindset to remain solution-oriented across various fields. Supported by confident public speaking skills and experience in managing my own business, I am ready to contribute to a professional environment that demands technical precision, creativity, and continuous self-development.</p>
            <p className="text-textLight font-semibold mt-2">Here are a few technologies I’ve been working with recently:</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 text-sm font-mono mt-2">
              {techStack.map((tech, i) => (
                <li key={i} className="flex items-center gap-2 text-textDark hover:text-textGreen transition-colors cursor-default">
                  <span className="text-textGreen text-xs"><AiFillThunderbolt /></span>{tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 02. Experience */}
      <section id="experience" className="pt-24 scroll-mt-10">
        <SectionTitle title="Where I Have Worked" titleNo="2" />
        <div className="mt-12 flex flex-col md:flex-row gap-8 lg:gap-12">
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible scrollbar-hide w-full md:w-48 z-10 gap-3 md:gap-0 pb-4 md:pb-0 md:border-l-2 border-gray-700">
            {experiences.map((exp, i) => (
              <button 
                key={i} 
                onClick={() => setActiveExp(i)}
                className={cn(
                  "px-6 py-3 text-sm font-mono whitespace-nowrap text-left transition-all duration-300 rounded-full md:rounded-none",
                  activeExp === i 
                    ? "bg-textGreen/10 text-textGreen md:bg-[#112240] border border-textGreen md:border-transparent md:border-l-2 md:-ml-[2px]" 
                    : "bg-[#112240] text-textDark border border-transparent md:bg-transparent md:hover:bg-[#112240]/50 hover:text-textLight"
                )}
              >
                {exp.label}
              </button>
            ))}
          </div>

          <div className="w-full max-w-3xl min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-left"
              >
                <h3 className="text-xl md:text-2xl font-bold text-textLight">{experiences[activeExp].title}</h3>
                <p className="text-sm text-textGreen mt-2 font-mono">{experiences[activeExp].date}</p>
                <p className="mt-6 text-textDark text-base md:text-lg leading-relaxed">{experiences[activeExp].details}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 03. Education */}
      <section id="education" className="pt-24 scroll-mt-10">
        <SectionTitle title="Education & Course" titleNo="3" />
        <div className="mt-12 flex flex-col gap-12 max-w-5xl text-left">
          {[
            { title: "Diploma of Informatics Engineering", place: "Politeknik Negeri Cilacap", date: "2023 - Present", desc: "Acquiring robust knowledge in computer networking, software engineering, mobile/web development, and expanding foundations in hardware systems." },
            { title: "Coding Camp (Web Developer)", place: "Dicoding Indonesia x DBS Foundation", date: "2023", desc: "Graduated from an intensive scholarship program focused on full-stack web development, software architecture, and professional career readiness." }
          ].map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border-l-[2px] border-textDark hover:border-textGreen pl-8 relative group transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-bodyColor border-2 border-textDark group-hover:border-textGreen group-hover:bg-textGreen transition-all duration-300" />
              <h3 className="text-xl md:text-2xl font-bold text-textLight group-hover:text-textGreen transition-colors">{edu.title}</h3>
              <p className="text-textDark font-mono mt-1 text-sm">{edu.place} | {edu.date}</p>
              <p className="mt-4 text-textDark text-base md:text-lg leading-relaxed">{edu.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 04. Projects */}
      <section id="projects" className="pt-24 scroll-mt-10">
        <SectionTitle title="Some Things I've Built" titleNo="4" />
        
        <div className="mt-16 flex flex-col gap-20">
          {projects.map((proj, i) => {
            const isReverse = i % 2 !== 0;
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center bg-[#112240]/50 p-6 lg:p-8 rounded-2xl border border-transparent hover:border-textGreen/30 transition-all duration-300 group cursor-pointer`}
              >
                <Link to={proj.detailLink} className="absolute inset-0 z-10 rounded-2xl" aria-label={`View details for ${proj.title}`}></Link>

                <div className="w-full lg:w-2/5 max-w-[400px] aspect-[4/3] relative overflow-hidden rounded-xl shadow-2xl pointer-events-none flex-shrink-0 bg-[#0A192F]/50 flex items-center justify-center">
                  {/* Blurred Backdrop for varying aspect ratios */}
                  <img 
                    src={proj.image} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-25 scale-110"
                  />
                  <div className="absolute inset-0 bg-textGreen/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="relative z-0 max-w-full max-h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                <div className="w-full lg:w-3/5 flex flex-col justify-center relative z-20 pointer-events-none">
                  <p className="text-textGreen font-mono text-sm mb-2">Featured Project</p>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-textLight mb-4 group-hover:text-textGreen transition-colors">
                    {proj.title}
                  </h3>
                  
                  <div className={cn("bg-[#0A192F] p-6 lg:p-8 rounded-xl shadow-xl text-textDark text-sm md:text-base leading-relaxed border border-gray-800", isReverse ? "lg:-mr-12" : "lg:-ml-12")}>
                    {proj.description}
                  </div>

                  <ul className="flex flex-wrap gap-4 text-xs md:text-sm font-mono text-textDark mt-6 mb-8">
                    {proj.tech.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex gap-4 items-center pointer-events-auto relative z-30">
                    {proj.githubLink && (
                      <a href={proj.githubLink} target="_blank" rel="noreferrer" className="text-2xl text-textLight hover:text-textGreen transition-colors cursor-pointer p-2 -ml-2">
                        <TbBrandGithub />
                      </a>
                    )}
                    {proj.liveLink && (
                      <a href={proj.liveLink} target="_blank" rel="noreferrer" className="text-2xl text-textLight hover:text-textGreen transition-colors cursor-pointer p-2">
                        <RxOpenInNewWindow />
                      </a>
                    )}
                    <Link to={proj.detailLink} className="ml-2 text-sm font-mono text-textGreen hover:underline cursor-pointer p-2">
                      Read Case Study ➔
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 05. Contact */}
      <section id="contact" className="py-32 flex flex-col items-center text-center scroll-mt-10">
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-textGreen font-mono font-medium mb-4">05. What’s Next?</motion.p>
        <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-5xl md:text-6xl font-bold text-textLight mb-8">Get In Touch</motion.h2>
        <motion.p initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="max-w-xl text-textDark mb-12 text-base md:text-lg leading-relaxed">
          My inbox is always open. Whether you have a question, a business inquiry, or just want to say hi, I'll try my best to get back to you!
        </motion.p>
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="flex gap-6 md:gap-8">
          <a href="mailto:amlabar14@gmail.com" className="w-14 h-14 md:w-16 md:h-16 border-2 border-textGreen rounded-full flex items-center justify-center text-textGreen hover:bg-textGreen/10 text-2xl md:text-3xl transition-all hover:scale-110"><IoMail /></a>
          <a href="tel:085174195354" className="w-14 h-14 md:w-16 md:h-16 border-2 border-textGreen rounded-full flex items-center justify-center text-textGreen hover:bg-textGreen/10 text-2xl md:text-3xl transition-all hover:scale-110"><IoCall /></a>
          <a href="https://wa.me/6285174195354" target="_blank" rel="noreferrer" className="w-14 h-14 md:w-16 md:h-16 border-2 border-textGreen rounded-full flex items-center justify-center text-textGreen hover:bg-textGreen/10 text-2xl md:text-3xl transition-all hover:scale-110"><IoLogoWhatsapp /></a>
        </motion.div>
      </section>

    </div>
  );
};

export default Index;