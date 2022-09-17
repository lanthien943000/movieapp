import { useEffect, useState } from "react";

function useScroll() {
  const [scrolly, setScrolly] = useState(0);
  const handleScrolly = () => {
    const scrolly = window.scrollY || document.documentElement.scrollTop;
    setScrolly(scrolly);
  };
  useEffect(() => {
    handleScrolly();
    window.addEventListener("scroll", handleScrolly);
    return () => {
      window.removeEventListener("scroll", handleScrolly);
    };
  }, []);
  return [scrolly];
}

export default useScroll;
