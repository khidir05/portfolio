import React from "react";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube, SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="py-8 text-center flex flex-col items-center justify-center max-w-6xl mx-auto px-6 lg:px-8">
      <div className="xl:hidden flex gap-6 mb-6">
        <a href="https://github.com/khidir05" className="text-2xl text-textDark hover:text-textGreen transition-colors"><TbBrandGithub /></a>
        <a href="https://youtube.com/@mz.amlabar8311" className="text-2xl text-textDark hover:text-textGreen transition-colors"><SlSocialYoutube /></a>
        <a href="https://linkedin.com/in/khidir-afwan-amlabar-454577253" className="text-2xl text-textDark hover:text-textGreen transition-colors"><SlSocialLinkedin /></a>
      </div>
      <p className="text-sm font-mono text-textDark hover:text-textGreen transition-colors cursor-pointer">
        Built by NoorMuhammad. Modded & Styled by Khidir Afwan.
      </p>
    </footer>
  );
};

export default Footer;