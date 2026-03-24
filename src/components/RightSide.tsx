import React from "react";
import { motion } from "framer-motion";

const RightSide = () => {
  return (
    <aside className="hidden xl:flex w-32 h-full fixed right-0 bottom-0 flex-col items-center justify-end pb-10 z-40">
      <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} href="mailto:amlabar14@gmail.com" className="rotate-90 text-sm font-mono tracking-widest text-textLight hover:text-textGreen hover:-translate-y-2 transition-all mb-32">
        amlabar14@gmail.com
      </motion.a>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="w-[1px] h-32 bg-textDark"></motion.div>
    </aside>
  );
};

export default RightSide;