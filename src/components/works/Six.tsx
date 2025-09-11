import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Six = () => { //Pt. Nocola IoT Solutions
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Tentor
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        August 2025 - Now
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Teach student about the lesson they have learned at school. 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Giving motivation for their future.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Try to help them by giving their solutions.
        </li>
      </ul>
    </motion.div>
  );
};

export default Six;