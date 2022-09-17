import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowWidth, setWindowWith] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );
  useEffect(() => {
    const handleWindowWith = () => {
      const width = window.innerWidth || document.documentElement.clientWidth;
      setWindowWith(width);
    };
    handleWindowWith();
    window.addEventListener("resize", handleWindowWith);
    return () => {
      window.removeEventListener("resize", handleWindowWith);
    };
  }, []);
  return [windowWidth];
};
