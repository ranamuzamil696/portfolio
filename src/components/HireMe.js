import Link from "next/link";
import React from "react";
import { CircularText } from "./Icons";

export const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex flex-col items-center justify-center 
      md:right-8 sm:right-2 md:bottom-auto md:left-auto md:top-0 md:absolute z-20 
      overflow-hidden"
    >
      <div className="w-48 h-48 md:w-24 md:h-24 flex items-center justify-center relative">
        <CircularText className="fill-dark dark:fill-light w-full h-full animate-[spin_6s_linear_infinite]" />
        <Link
          href="https://calendly.com/ranamuzamil195/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          shadow-md border border-solid bg-dark rounded-full text-white font-semibold 
          hover:bg-light hover:border-dark hover:text-dark 
          dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:text-light dark:hover:border-light dark:shadow-light/25 
          
          /* Scaled the button down slightly to create a perfect, clean gap */
          w-20 h-20 text-xs
          md:w-10 md:h-10 md:text-[8px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};
