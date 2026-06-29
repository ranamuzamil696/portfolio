import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark shadow-md
       
       /* Text & padding scaling per breakpoint */
       lg:py-2 lg:px-4 lg:text-sm 
       md:py-1.5 md:px-3 md:text-xs 
       sm:py-1 sm:px-2 sm:text-[11px] 
       xs:py-0.5 xs:px-1.5 xs:text-[9px]"
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 sm:text-6xl xs:text-4xl">
        Skills
      </h2>

      {/* Brought the default and lg desktop multipliers back down to prevent them 
        from over-expanding, while maintaining the wide breathing room for mobile layout targets.
      */}
      <div
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center 
        mb-64 md:mb-32 rounded-full
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg lg:h-[80vh]
        md:bg-circularLightMd md:dark:bg-circularDarkMd 
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm sm:h-[60vh] 
        xs:h-[50vh]
        
        /* Fine-Tuned Responsive Tuning System */
        [--x-scale:1] [--y-scale:1]
        lg:[--x-scale:0.95] lg:[--y-scale:0.95] 
        md:[--x-scale:0.95] md:[--y-scale:0.9] 
        sm:[--x-scale:0.85] sm:[--y-scale:0.85] 
        xs:[--x-scale:0.75] xs:[--y-scale:0.8]"
      >
        {/* Central Core Hub */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex rounded-full font-bold bg-dark text-light p-8 shadow-dark
          dark:bg-light dark:text-dark lg:p-6 md:p-4 sm:p-2.5 sm:text-xs xs:text-[10px] xs:p-2 z-10"
        >
          Marketing
        </motion.div>

        {/* Balanced base values that sit nicely on desktop and scale accurately on phones */}
        <Skill
          name="Funnel Strategy"
          x="calc(-25vw * var(--x-scale))"
          y="calc(2vh * var(--y-scale))"
        />
        <Skill
          name="Growth Marketing"
          x="calc(-8vw * var(--x-scale))"
          y="calc(-14vh * var(--y-scale))"
        />
        <Skill
          name="Paid Ads"
          x="calc(25vw * var(--x-scale))"
          y="calc(6vh * var(--y-scale))"
        />
        <Skill
          name="Content Creation"
          x="calc(0vw * var(--x-scale))"
          y="calc(18vh * var(--y-scale))"
        />
        <Skill
          name="Social Media"
          x="calc(-26vw * var(--x-scale))"
          y="calc(-20vh * var(--y-scale))"
        />
        <Skill
          name="Media Buying"
          x="calc(20vw * var(--x-scale))"
          y="calc(-16vh * var(--y-scale))"
        />
        <Skill
          name="Email Marketing"
          x="calc(-38vw * var(--x-scale))"
          y="calc(-5vh * var(--y-scale))"
        />
        <Skill
          name="SMS Marketing"
          x="calc(37vw * var(--x-scale))"
          y="calc(-5vh * var(--y-scale))"
        />
        <Skill
          name="Funnel Strategy"
          x="calc(0vw * var(--x-scale))"
          y="calc(-26vh * var(--y-scale))"
        />
        <Skill
          name="Analytics"
          x="calc(-29vw * var(--x-scale))"
          y="calc(22vh * var(--y-scale))"
        />
        <Skill
          name="Brand Growth"
          x="calc(33vw * var(--x-scale))"
          y="calc(22vh * var(--y-scale))"
        />
      </div>
    </>
  );
};

export default Skills;
