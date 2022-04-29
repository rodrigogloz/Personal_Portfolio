import { useEffect, useState } from "react";

export const useIntersectionObserver = (options) => {
  const [isIntersecting, setisIntersecting] = useState(false);

  useEffect(() => {
    const selector = document.querySelector(options.target);
    let callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setisIntersecting(true);
        } else {
          setisIntersecting(false);
        }
      });
    };

    let observer = new IntersectionObserver(callback, options);

    observer.observe(selector);
  }, []);

  return isIntersecting;
};
