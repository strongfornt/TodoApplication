import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`${className} max-w-sm  mx-auto p-x-4 mt-28 `}
    >
      {children}
    </div>
  );
};

export default Container;
