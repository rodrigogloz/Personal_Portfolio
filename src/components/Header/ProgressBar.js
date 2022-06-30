import React, { useEffect, useState } from "react";
import useScrollProgress from "../../hooks/useScrollProgress";

const ProgressBar = ({ scrollRef }) => {
  const [scroll] = useScrollProgress(scrollRef);

  let mobile_ratio = 85;
  const mq = window.matchMedia("(max-width: 768px)");
  mobile_ratio = mq.matches ? mobile_ratio : 70;

  const value = (scroll * 100) / mobile_ratio;

  return (
    <div
      className="progress-bar"
      style={{
        background: `linear-gradient(to right, red ${value}%, transparent 0)`,
      }}
    ></div>
  );
};

export default ProgressBar;
