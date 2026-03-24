import React from "react";
import { motion } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const LeftSide = () => {
  return (
    <aside className="hidden xl:flex w-32 h-full fixed left-0 bottom-0 flex-col items-center justify-end gap-6 pb-10 z-40">
      {[
        { icon: <TbBrandGithub />, url: "https://github.com/khidir05" },
        { icon: <SlSocialYoutube />, url: "https://youtube.com/@mz.amlabar8311" },
        { icon: <SlSocialLinkedin />, url: "https://linkedin.com/in/khidir-afwan-amlabar-454577253" },
        { icon: <SlSocialInstagram />, url: "https://instagram.com/khidir.af_one/" }
      ].map((item, index) => (
        <motion.a key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + (index * 0.1) }} href={item.url} target="_blank" className="text-2xl text-textLight hover:text-textGreen hover:-translate-y-1 transition-all">
          {item.icon}
        </motion.a>
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="w-[1px] h-32 bg-textDark mt-4"></motion.div>
    </aside>
  );
};

export default LeftSide;