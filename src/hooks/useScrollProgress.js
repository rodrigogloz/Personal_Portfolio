import { useLayoutEffect, useEffect, useState, useCallback } from "react";

const debounce = (fn) => {
  let queued = null;
  return [
    (...args) => {
      if (queued) cancelAnimationFrame(queued);
      queued = requestAnimationFrame(fn.bind(fn, ...args));
    },
    () => {
      cancelAnimationFrame(queued);
    },
  ];
};

// check if we're in a browser or server environment
const isBrowser = typeof window !== `undefined`;

// use the correct effect
const useEnhancedEffect = isBrowser ? useLayoutEffect : useEffect;

// get window scroll position
function getScrollPosition() {
  if (!isBrowser) return { x: 0, y: 0 };
  return { x: window.scrollX, y: window.scrollY };
}

function useScrollEffect(effect) {
  // useCallback to keep the function reference the same
  // as long as `effect` stays the same
  const update = useCallback(() => {
    // get new scroll position
    const position = getScrollPosition();

    // run effect with current position
    effect && effect(position);
  }, [effect]);

  useEnhancedEffect(() => {
    // run effect on mount
    update();

    // performance:  debounce update function calls
    const [debouncedUpdate, cancelUpdate] = debounce(update);

    // attach scroll listener
    window.addEventListener("scroll", debouncedUpdate);

    return () => {
      // perf: remove the event listener
      window.removeEventListener("scroll", debouncedUpdate);
      cancelUpdate();
    };
  }, []);
}

function useScrollProgress(ref) {
  // create ref to track node's scrollHeight

  // state to store the scroll progress
  const [progress, setProgress] = useState(0);

  // let's use the sweet effect :)
  useScrollEffect((scrollPos) => {
    // if there's no node, don't do anything 'coz there's no point
    if (!ref.current) return;

    let { bottom, height, top } = ref.current.getBoundingClientRect();

    let percent_calc = (bottom - 130) / height;
    let percent_post = (1 - percent_calc) * 100;

    //Original code
    //const percent = (scrollPos.y / ref.current.scrollHeight) * 100;

    // update the state
    setProgress(percent_post);
  });

  // return the goods :)
  return [progress];
}

export default useScrollProgress;
