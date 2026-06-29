import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import AboutIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <AboutIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top rounded-full dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Science in Computer Science"
            time="2018-2022"
            place="Pakistan"
            info="Built a strong foundation in programming, databases, and software systems. Developed problem-solving and analytical skills applied later in real-world digital and business environments."
          />

           <Details
            type="Certified: Meta & Google Ads"
            time="2018-2019"
            place="Ads Wizard"
            info="Trained in paid advertising fundamentals across Meta and Google platforms. Built a strong base in campaign structure, targeting, optimization, and performance tracking."
          />

          <Details
            type="Certified: Data Analytics & Machine Learning"
            time="2022"
            place="IT Academy, Pakistan Air Force"
            info="Gained hands-on experience in data analysis, model fundamentals, and decision-making through data. Applied analytical thinking to understand patterns, performance, and optimization opportunities."
          />

          <Details
            type="Certified: Content Creation & Editing"
            time="2023"
            place="Udemy"
            info="Learned modern content creation techniques for digital platforms and brand storytelling. Focused on creating engaging, conversion-driven visual and written content."
          />

          <Details
            type="Certified: HCIA - AI"
            time="2022"
            place="Huawei"
            info="Developed foundational knowledge of artificial intelligence concepts and real-world use cases. Strengthened understanding of how AI supports automation, analytics, and smarter decision-making."
          />

         
        </ul>
      </div>
    </div>
  );
};

export default Education;
