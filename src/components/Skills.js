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

      <div
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark flex items-center justify-center 
        mb-64 md:mb-32 rounded-full
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg lg:h-[80vh]
        md:bg-circularLightMd md:dark:bg-circularDarkMd 
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm sm:h-[60vh] 
        xs:h-[50vh]
        
        /* Fine-Tuned Responsive Tuning System */
        [--x-scale:1] [--y-scale:1]
        lg:[--x-scale:0.95] lg:[--y-scale:0.85] 
        md:[--x-scale:0.9] md:[--y-scale:0.75] 
        sm:[--x-scale:0.85] sm:[--y-scale:0.6] 
        xs:[--x-scale:0.75] xs:[--y-scale:0.5]"
      >
        {/* Central Core Hub */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex rounded-full font-bold bg-dark text-light p-8 shadow-dark
          dark:bg-light dark:text-dark lg:p-6 md:p-4 sm:p-2.5 sm:text-xs xs:text-[10px] xs:p-2 z-10"
        >
          Full Stack Marketing
        </motion.div>

        {/* --- TOP AXIS (Outer Edge) --- */}
        <Skill
          name="Digital Marketing"
          x="calc(0vw * var(--x-scale))"
          y="calc(-32vh * var(--y-scale))"
        />

        {/* --- BOTTOM AXIS (Outer Edge) --- */}
        <Skill
          name="Social Media Marketing"
          x="calc(0vw * var(--x-scale))"
          y="calc(32vh * var(--y-scale))"
        />

        {/* --- LEFT ARC SKILLS --- */}
        <Skill
          name="Email Marketing"
          x="calc(-26vw * var(--x-scale))"
          y="calc(-22vh * var(--y-scale))"
        />
        <Skill
          name="SMS Marketing"
          x="calc(-38vw * var(--x-scale))"
          y="calc(-4vh * var(--y-scale))"
        />
        <Skill
          name="Viral Marketing"
          x="calc(-32vw * var(--x-scale))"
          y="calc(14vh * var(--y-scale))"
        />
        <Skill
          name="Influencer Marketing"
          x="calc(-18vw * var(--x-scale))"
          y="calc(24vh * var(--y-scale))"
        />

        {/* --- RIGHT ARC SKILLS --- */}
        <Skill
          name="Funnel Strategy"
          x="calc(22vw * var(--x-scale))"
          y="calc(-22vh * var(--y-scale))"
        />
        <Skill
          name="Meta & Google Ads"
          x="calc(38vw * var(--x-scale))"
          y="calc(-10vh * var(--y-scale))"
        />
        <Skill
          name="Data & Insights"
          x="calc(36vw * var(--x-scale))"
          y="calc(6vh * var(--y-scale))"
        />
        <Skill
          name="Growth Strategy"
          x="calc(28vw * var(--x-scale))"
          y="calc(18vh * var(--y-scale))"
        />
        <Skill
          name="Content Creation"
          x="calc(16vw * var(--x-scale))"
          y="calc(25vh * var(--y-scale))"
        />
      </div>
    </>
  );
};

export default Skills;