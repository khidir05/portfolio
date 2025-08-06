import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto py-12 lg:py-24 flex flex-col gap-12"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-2/3 text-base text-textDark font-bodyFont flex flex-col gap-6"
        >
          <p>
            Hello I am Khidir and I am a dedicated technology enthusiast, currently balancing my roles as a university student and educator. My professional focus is on practical skill development—mastering my current abilities while consistently building new ones, and I actively leverage AI to support and accelerate my learning process. I thrive in challenging situations by maintaining a calm and analytical perspective, ensuring every problem becomes a valuable lesson.
          </p>
          <p>
            This drive extends beyond academics into the realm of entrepreneurship. While pursuing my degree, I am also actively building a portfolio of digital and non-digital businesses. This allows me to experiment, inovate, and apply my skills in a dynamic environment, effectively turning concepts into reality.
          </p>
          <p className="font-titleFont font-semibold text-textLight">
            Here are some technologies I’ve been working with recently:
          </p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-3 mt-4">
            {[
              "Design Graphics",
              "Office Suite Proficiency",
              "Data",
              "JS",
              "WordPress",
              "Desktop Support Technician",
              "Linux Administrator",
              "CAD and 3D Modeling",
              "Web Development",
              "AWS",
              "PHP",
              "C#",
              "Electrical Engineering"
            ].map((tech, index) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2 hover:text-textGreen transition-colors duration-300"
              >
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {tech}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full lg:w-1/3 h-80 relative group"
        >
          <div className="absolute w-full h-80 rounded-lg overflow-hidden shadow-navbarShadow">
            <img
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              src={"/assets/images/1.jpg"}
              alt="Profile Image"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
