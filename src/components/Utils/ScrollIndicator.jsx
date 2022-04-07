import React, { useState } from "react";

export const ScrollIndicator = () => {
  const [scroll, setScroll] = useState(0);

  window.onscroll = function () {
    onScroll();
  };

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${scroll}%` }}></div>
    </div>
  );
};
