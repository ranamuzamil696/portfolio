import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light p-12 dark:bg-dark xl:p-10 lg:p-10 
      md:p-6 sm:p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
