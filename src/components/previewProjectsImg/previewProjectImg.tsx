import React, { useRef } from "react";
import * as styles from "./previewProjectImg.module.scss";
import { motion, useInView } from "framer-motion";
import Img from "gatsby-image";
import { ImageSharpFluid } from "../../types/dataTypes";
type ImgType = {
  src: ImageSharpFluid;
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
        <Img
          ref={imgRef}
          fluid={src}
          alt="preview_img"
          className={styles.img}
        />
        <div className={styles.bottom_disc}>
          <span>{title}</span>
        </div>
      </abbr>
    </motion.button>
  );
};
