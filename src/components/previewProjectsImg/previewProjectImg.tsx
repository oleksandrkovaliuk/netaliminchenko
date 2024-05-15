import React, { Fragment, useEffect, useRef, useState } from "react";
import * as styles from "./previewProjectImg.module.scss";
import { motion, useInView } from "framer-motion";
type ImgType = {
  src: string;
};
export const PreviewProjectImg: React.FC<ImgType> = ({ src }) => {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const imgsRef = useRef(null);
  const imgsInView = useInView(imgsRef, { amount: "some", once: true });
  useEffect(() => {
    const body = document.body;
    if (showFullInfo) {
      body.classList.add("disable_scroll");
    }
    return () => {
      body.classList.remove("disable_scroll");
    };
  }, [showFullInfo]);
  return (
    <Fragment>
      <div
        className={styles.modal_bg}
        style={
          showFullInfo
            ? { position: "fixed", opacity: "1", pointerEvents: "unset" }
            : { position: "static", opacity: "0", pointerEvents: "none" }
        }
        onClick={() => setShowFullInfo(false)}
      />

      <motion.button
        ref={imgsRef}
        whileTap={{ scale: 0.95 }}
        style={
          imgsInView
            ? { transform: "0px", opacity: "1" }
            : {
                transform: "70px",
                opacity: "0",
              }
        }
        className={styles.img_wrap}
        onClick={() => setShowFullInfo(true)}
      >
        <img
          style={
            showFullInfo
              ? {
                  transform: "scale(1.2)",
                  position: "fixed",
                  top: "20%",
                  left: "20%",
                }
              : { transform: "scale(1)" }
          }
          src={src}
          alt="preview_img"
          className={styles.img}
        />
      </motion.button>
    </Fragment>
  );
};
