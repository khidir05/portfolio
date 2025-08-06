import { useState } from "react";
import SectionTitle from "./SectionTitle";
// import Amazon from "./works/Amazon";
import Three from "./works/Three";
import Two from "./works/Two";
import One from "./works/one";
import Four from "./works/Four";

const Experience = () => {
  const [workOne, setWorkOne] = useState(true);
  const [workTwo, setWorkTwo] = useState(false);
  const [workThree, setWorkThree] = useState(false);
  const [workFour, setWorkFour] = useState(false);
  // const [workAmazon, setWorkAmazon] = useState(false);

  const handleOne = () => {
    setWorkOne(true);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(false);
    // setWorkAmazon(false);
  };

  const handleTwo = () => {
    setWorkOne(false);
    setWorkTwo(true);
    setWorkThree(false);
    setWorkFour(false);
    // setWorkAmazon(false);
  };

  const handleThree = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(true);
    setWorkFour(false);
    // setWorkAmazon(false);
  };
  const handleFour = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(true);
    // setWorkAmazon(false);
  };
  // const handleAmazon = () => {
  //   setWorkOne(false);
  //   setWorkTwo(false);
  //   setWorkThree(false);
  //   setWorkFour(false);
  //   setWorkAmazon(true);
  // };
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
          {/* <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li> */}
        </ul>
        {workOne && <One />}
        {workTwo && <Two />}
        {workThree && <Three />}
        {workFour && <Four />}
        {/* {workAmazon && <Amazon />} */}
      </div>
    </section>
  );
};

export default Experience;
