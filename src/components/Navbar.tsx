import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const targetId = e.currentTarget.href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    if (elem) {
      // Menambahkan offset agar tidak tertutup navbar
      const top = elem.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="w-full shadow-lg backdrop-blur-md h-20 lg:h-[10vh] sticky top-0 z-50 bg-bodyColor/90 px-4 border-b border-gray-800">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 h-full flex items-center justify-between">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-12 cursor-pointer" src="/assets/images/dir.png" alt="logo" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} />
          
          <div className="hidden md:inline-flex items-center gap-8">
            <ul className="flex font-mono text-[13px] gap-8">
              {["home", "about", "experience", "education", "projects", "contact"].map((id, i) => (
                <a key={id} href={`/#${id}`} onClick={handleScroll} className="text-textLight hover:text-textGreen transition-colors duration-300">
                  <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                    <span className="text-textGreen">0{i}.</span> {id.charAt(0).toUpperCase() + id.slice(1)}
                  </motion.li>
                </a>
              ))}
            </ul>
            {/* Update: Link Resume */}
            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} href="/file/me.pdf" download="Resume_Khidir" target="_blank">
              <button className="px-5 py-2.5 rounded text-textGreen font-mono text-[13px] border border-textGreen hover:bg-textGreen/10 transition-colors duration-300">Resume</button>
            </motion.a>
          </div>

          <div onClick={() => setShowMenu(true)} className="md:hidden flex flex-col gap-[6px] cursor-pointer group p-2">
            <span className="w-7 h-[2px] bg-textGreen transition-all group-hover:w-5"></span>
            <span className="w-7 h-[2px] bg-textGreen"></span>
            <span className="w-7 h-[2px] bg-textGreen transition-all group-hover:w-5"></span>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {showMenu && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-bodyColor/80 md:hidden backdrop-blur-sm">
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.3 }} className="absolute right-0 top-0 w-[75%] max-w-sm h-full bg-[#112240] flex flex-col items-center p-10 shadow-2xl">
              <MdOutlineClose onClick={() => setShowMenu(false)} className="text-4xl text-textGreen self-end cursor-pointer hover:rotate-90 transition-transform duration-300" />
              <ul className="flex flex-col gap-10 text-center mt-24">
                {["home", "about", "experience", "education", "projects", "contact"].map((id, i) => (
                  <a key={id} href={`/#${id}`} onClick={handleScroll} className="text-lg font-mono text-textLight hover:text-textGreen transition-colors">
                    <span className="text-textGreen block mb-1 text-sm">0{i}.</span> 
                    {id.toUpperCase()}
                  </a>
                ))}
              </ul>
              {/* Update: Link Resume Mobile */}
              <a href="/file/me.pdf" download="Resume_Khidir" target="_blank" className="mt-auto mb-10">
                <button className="px-10 py-3 border border-textGreen rounded text-textGreen font-mono hover:bg-textGreen/10 transition-colors">Resume</button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;