import React, { useEffect, useState } from "react";
import * as styles from "./backToTheTop.module.scss";
import { Top } from "../../icons/top";
export const BackToTopBtn = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <abbr title="back to top">
      <button
        onClick={handleGoToTop}
        className={styles.backToTheTop}
        style={isScrolled ? { opacity: "1" } : { opacity: "0" }}
      >
        <Top />
      </button>
    </abbr>
  );
};
