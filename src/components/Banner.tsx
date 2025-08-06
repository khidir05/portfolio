import { motion } from "framer-motion";
const Banner = () => {
  return (
    <section id="home" className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8">
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Khidir Afwan Amlabar.
        <span className="text-textDark mt-2 lg:mt-4">
          I work for all technologies.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        A dedicated university student and educator with a strong passion for technology, particularly in hardware and electrical systems. Highly enthusiastic about continuous learning to grow independently, effectively collaborating with AI to support and accelerate my projects. Confident in public speaking, with proven skills in time management and personal organization.{" "}
      </motion.p>
      <a href="https://github.com/khidir05" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my project!
        </motion.button>
      </a>
    </section>
  );
};

export default Banner;
