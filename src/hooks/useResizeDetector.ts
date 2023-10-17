import { useEffect, useState } from "react";

export const useResizeDetector = () => {
  const [width, setWidth] = useState(0);
  //   This logic is here to show that if we use this hooks in any component, on window resize there will be a re-rendre
  useEffect(() => {
    const resizeWindow = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  return null;
};
