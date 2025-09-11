import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Five = () => { //Pt. Nocola IoT Solutions
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Internship
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        August 2025 - December 2025
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Learn and solve IoT problems (small scale). 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Exploration of learning technology.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Managing of data's IoT.
        </li>
      </ul>
    </motion.div>
  );
};

export default Five;