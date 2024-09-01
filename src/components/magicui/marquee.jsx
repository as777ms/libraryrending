import React from "react";
import "./marquee.css"; // Ensure this CSS file contains the marquee styles

const Marquee = ({ children, className, reverse, pauseOnHover }) => {
  return (
    <div
      className={`marquee ${reverse ? "reverse" : ""} ${
        pauseOnHover ? "pause-on-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Marquee;