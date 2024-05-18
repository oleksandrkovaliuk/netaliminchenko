import React, { Fragment, useEffect, useRef, useState } from "react";
import * as styles from "./previewProjectImg.module.scss";
import { motion, useInView } from "framer-motion";
type ImgType = {
  src: string;
  title: string;
  slug: string;
};
export const PreviewProjectImg: React.FC<ImgType> = ({ src, title, slug }) => {
  const imgsWrapRef = useRef(null);
  const imgRef = useRef(null);
  const imgsInView = useInView(imgsWrapRef, { amount: "some", once: true });
  return (
    <motion.button
      ref={imgsWrapRef}
      whileTap={{ scale: 0.95 }}
      style={
        imgsInView
          ? {
              transform: "translateY(0px)",
              opacity: "1",
            }
          : {
              transform: "translateY(70px)",
              opacity: "0",
            }
      }
      className={styles.img_wrap}
    >
      <abbr title="check full project">
        <img ref={imgRef} src={src} alt="preview_img" className={styles.img} />
        <div className={styles.bottom_disc}>
          <span>{title}</span>
        </div>
      </abbr>
    </motion.button>
  );
};
