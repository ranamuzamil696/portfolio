import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Marketing Manager"
            company="Oporto"
            companyLink="https://www.oporto.com/"
            time="2025-Present"
            address="Dubai, UAE | OnSite"
            work="Led a complete organic marketing transformation that resulted in approximately 22 percent revenue growth from the existing baseline. Achieved the highest sales performance in the brand's history through structured funnels, content strategy, and channel alignment. Increased delivery performance by over 580 percent and boosted monthly product sales volume by nearly 480 percent, all without using paid advertising. Built and executed the full marketing structure end to end."
          />

          <Details
            position="Media Buyer"
            company="Shopogenie Studios"
            // companyLink="https://microsoft.com"
            time="2025-Present"
            address="United Kingdom | Freelance"
            work="Managing Meta Ads for a podcast production company offering studio and editing services. Generating consistent, high-quality leads with a 99 percent success performance score. Campaigns are structured for precision targeting and lead quality, supporting steady growth and client acquisition."
          />

          <Details
            position="Media Buyer"
            company="Scandinavian Lines Logistics"
            // companyLink="https://facebook.com"
            time="2024-2025"
            address="Dubai, UAE | OnSite"
            work="Managed Meta and Google Ads with a consistent 80 percent success performance score, delivering daily high-intent leads. Designed and optimized paid media funnels supported by strong tracking infrastructure using analytics and event-based measurement. Took a data-driven approach to daily optimization, continuously improving lead quality and revenue performance through structured campaign management."
          />

          <Details
            position="Marketing Manager"
            company="Atta ul Zahoor LLC"
            // companyLink="https://amazon.com"
            time="2022-2024"
            address="Dubai, UAE | On Site"
            work="Handled complete digital presence including social media management, WordPress website development, and lead generation. Planned and executed daily content while monitoring campaign performance and focusing on measurable outcomes. Supported business growth through consistent execution, optimization, and result-focused marketing activities."
          />

          <Details
            position="Media Buyer"
            company="Simba Seven Media"
            // companyLink="https://mit.edu"
            time="2019-2022"
            address="California, USA | Freelance"
            work="Worked as a full-cycle media buyer for a logistics and trucking business. Managed end-to-end paid campaigns across Meta, Google, and YouTube Ads with an 85 percent success performance score. Focused on lead generation, campaign scaling, and continuous optimization to support sustained business growth."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
