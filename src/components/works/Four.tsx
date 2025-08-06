import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Four = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Helper Technician
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2023 - August 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Maintenance and repairing cooling system in industries and residential homes. 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Welding cooler pipe
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Create offering with clients and became their consultants 
        </li>
      </ul>
    </motion.div>
  );
};

export default Four;
