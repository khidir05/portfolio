import { useState } from "react";
import SectionTitle from "./SectionTitle";
// import Amazon from "./works/Amazon";
import Three from "./works/Three";
import Two from "./works/Two";
import One from "./works/One";
import Four from "./works/Four";
import Five from "./works/Five";
import Six from "./works/Six";
import Seven from "./works/Seven";

const Experience = () => {
  const [workOne, setWorkOne] = useState(true);
  const [workTwo, setWorkTwo] = useState(false);
  const [workThree, setWorkThree] = useState(false);
  const [workFour, setWorkFour] = useState(false);
  const [workFive, setWorkFive] = useState(false);
  const [workSix, setWorkSix] = useState(false);
  const [workSeven, setWorkSeven] = useState(false);
  // const [workAmazon, setWorkAmazon] = useState(false);

  const handleOne = () => {
    setWorkOne(true);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(false);
    setWorkFive(false);
    setWorkSix(false);
    setWorkSeven(false);
    // setWorkAmazon(false);
  };

  const handleTwo = () => {
    setWorkOne(false);
    setWorkTwo(true);
    setWorkThree(false);
    setWorkFour(false);
    setWorkFive(false);
    setWorkSix(false);
    setWorkSeven(false);
    // setWorkAmazon(false);
  };

  const handleThree = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(true);
    setWorkFour(false);
    setWorkFive(false);
    setWorkSix(false);
    setWorkSeven(false);
    // setWorkAmazon(false);
  };
  const handleFour = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(true);
    setWorkFive(false);
    setWorkSix(false);
    setWorkSeven(false);
  };
  const handleFive = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(false);
    setWorkFive(true);
    setWorkSix(false);
    setWorkSeven(false);
  };
  const handleSix = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(false);
    setWorkFive(false);
    setWorkSix(true);
    setWorkSeven(false);
  };
  const handleSeven = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(false);
    setWorkFive(false);
    setWorkSix(false);
    setWorkSeven(true);
  };  
  return (
    <section id="experience" className="py-10 lg:py-24">
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleOne}
            className={`${
              workOne
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            At Home
          </li>
          <li
            onClick={handleTwo}
            className={`${
              workTwo
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            PC LDII Cilacap Utara
          </li>
          <li
            onClick={handleThree}
            className={`${
              workThree
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Lentera Sinar Pemuda
          </li>
          <li
            onClick={handleFour}
            className={`${
              workFour
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            CV. Ady Teknik
          </li>
          <li
            onClick={handleFive}
            className={`${
              workFive
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            PT Nocola IoT Solutions
          </li>
          <li
            onClick={handleSix}
            className={`${
              workSix
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Anak Bangsa
          </li>
          <li
            onClick={handleSeven}
            className={`${
              workSeven
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            rimbakata project
          </li>
        </ul>
        {workOne && <One />}
        {workTwo && <Two />}
        {workThree && <Three />}
        {workFour && <Four />}
        {workFive && <Five />}
        {workSix && <Six />}
        {workSeven && <Seven />}
      </div>
    </section>
  );
};

export default Experience;
