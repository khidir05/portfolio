import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  // 1. Data proyek disimpan dalam sebuah array agar lebih rapi dan mudah dikelola
  const projects = [
    {
      title: "Expert System Website for Facial Skin Disease Diagnosis (Team)",
      des: "Dermacare is a machine learning web app I helped build to detect facial skin diseases. As frontend/backend developer, I integrated a responsive UI and connected a Random Forest model via Laravel API to deliver instant diagnosis.",
      listItem: ["Laravel", "Keras", "Tensorflow"],
      link: "https://github.com/khidir05/CapstoneProjectDicoding.git",
    },
    {
      title: "Dicoding Submission",
      des: "A collection of assignment-based projects completed as part of module graduation requirements from Dicoding Indonesia.",
      listItem: ["JS", "HTML", "CSS"],
      link: "https://github.com/khidir05/Dicoding_Submission.git",
    },
    {
      title: "Inventory Management System for DPRKP Jakarta",
      des: "A web application designed to manage inventory for the Department of Housing and Settlement of DKI Jakarta. It includes features for tracking inventory items, managing stock levels, and generating reports.",
      listItem: ["Vue JS", "Laravel", "MySQL"],
      link: "", // Link dikosongkan jika proyek tidak publik
    },
    {
      title: "VocabsNow - Vocabulary Learning App",
      des: "An ongoing project to help users learn and practice vocabulary through interactive exercises and quizzes. Still in development.",
      listItem: ["Next.js", "Laravel", "MySQL"],
      link: "",
    },
  ];

  return (
    <section id="projects" className="max-w-containerxs mx-auto py-10 lg:py-24 px-4">
      <SectionTitle title="My Project" titleNo="04" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {/* Menampilkan 6 proyek pertama */}
        {projects.slice(0, 6).map((project, i) => (
          <ArchiveCard
            key={i}
            title={project.title}
            des={project.des}
            listItem={project.listItem}
            link={project.link}
          />
        ))}

        {/* Menampilkan sisa proyek jika showMore true */}
        {showMore &&
          projects.slice(6).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: (i + 1) * 0.1 }}
            >
              <ArchiveCard
                title={project.title}
                des={project.des}
                listItem={project.listItem}
                link={project.link}
              />
            </motion.div>
          ))}
      </div>

      {/* 2. Teks ajakan untuk melihat GitHub, diletakkan di tengah */}
      <div className="mt-12 text-center">
        <p className="text-base text-textDark">
            This is just a glimpse. For a complete archive of my work, please visit my {" "}
          <a
            href="https://github.com/khidir05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-textGreen font-semibold hover:underline">
              GitHub profile
            </span>
          </a>
          .
        </p>
      </div>

      {/* 3. Tombol "Show More" hanya muncul jika total proyek > 6 */}
      {projects.length > 6 && (
        <div className="mt-12 flex items-center justify-center">
          {showMore ? (
            <button
              onClick={() => setShowMore(false)}
              className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Show Less
            </button>
          ) : (
            <button
              onClick={() => setShowMore(true)}
              className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Show More
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Archive;