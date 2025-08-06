import SectionTitle from "./SectionTitle";

const Education = () => {
  return (
    <section id="education" className="max-w-containerxs mx-auto py-10 lg:py-24 px-4">
      <SectionTitle title="Where I Have Studied" titleNo="03" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <div className="w-full">
          <ul className="flex flex-col gap-8">
            <li className="relative">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-textGreen border-2 border-bodyColor"></div>
              <div className="pl-10">
                <h3 className="text-xl md:text-2xl font-bold text-textLight">
                  Diploma of Informatics Engineering
                </h3>
                <p className="text-sm mt-1 font-medium text-textDark">
                  Politeknik NEgeri Cilacap
                </p>
                <p className="text-sm font-titleFont text-textDark mt-1">
                  2023 - Present
                </p> 
                <p className="mt-4 text-base font-bodyFont text-textDark">
                  I studied for approximately three years, during which I gained knowledge and practical skills in various areas of technology. My learning journey covered computer networking, software engineering, mobile app development, web development, and frameworks. I also explored the basics of computer hardware and systems, which helped build a solid foundation for my understanding of how both hardware and software interact.
                </p>
              </div>
              <span className="absolute left-0 top-0 h-full w-px bg-textDark/30 ml-[7px] mt-4"></span>
            </li>

            <li className="relative">
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-textGreen border-2 border-bodyColor"></div>
              <div className="pl-10">
                <h3 className="text-xl md:text-2xl font-bold text-textLight">
                  Coding camp (Web Developer)
                </h3>
                <p className="text-sm mt-1 font-medium text-textDark">
                  Dicoding Indonesia <span className="text-textGreen font-titlefont text-lg tracking wide"> X </span> DBS Foundation
                </p>
                <p className="text-sm font-titleFont text-textDark mt-1">
                  2023
                </p>
                <p className="mt-4 text-base font-bodyFont text-textDark">
                  Participated in an intensive scholarship program hosted by DBS Foundation in collaboration with Dicoding Academy, focusing on Front-End and Back-End development. In addition to technical skills, the program emphasized essential life and career skills including time and financial management, networking, and professional readiness equipping me with a holistic understanding of both tech and the working world.
                </p>
              </div>
              <span className="absolute left-0 top-0 h-full w-px bg-textDark/30 ml-[7px] mt-4"></span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;