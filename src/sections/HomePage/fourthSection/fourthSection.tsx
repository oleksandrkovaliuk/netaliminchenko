import React, { useEffect, useRef, useState } from "react";
import * as styles from "./fourthSection.module.scss";
import { motion, useInView } from "framer-motion";
import { useExtractAllProjects } from "../../../hooks/posts";
import { customerReviewTypes } from "../../../types/dataTypes";
type itemTypes = {
  id: number;
  item: string;
  preview_img: string;
};
export const FourthSection = () => {
  const Data = useExtractAllProjects();
  const imgsRef = useRef(null);

  const imgsInView = useInView(imgsRef, { amount: "some", once: true });
  const getCategories = new Set(
    Data.map(
      (item: { frontmatter: customerReviewTypes }) => item.frontmatter.category
    )
  );
  const collectCategories = [...getCategories];

  const [activeCategories, setActiveCategories] = useState<string>(
    collectCategories[0]
  );
  const [showingImgs, setShowingImgs] = useState([]);
  useEffect(() => {
    const filteredItem = Data.map(
      (project: { frontmatter: customerReviewTypes }) => project.frontmatter
    ).filter((item: customerReviewTypes) => activeCategories === item.category);
    setShowingImgs(filteredItem);
  }, [activeCategories]);
  return (
    <div className={styles.categories_wrap}>
      <div className={styles.chose_categories}>
        <span className={styles.title}>Browse all categories</span>
        <ul className={styles.categories_picker}>
          {collectCategories.map((item) => (
            <li key={item} data-picked={activeCategories === item}>
              <button onClick={() => setActiveCategories(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>

      <motion.ul
        ref={imgsRef}
        animate={{
          y: imgsInView ? "0px" : "30px",
          opacity: imgsInView ? "1" : "0",
        }}
        transition={{ type: "Inertia", duration: 1, stiffness: 50 }}
        className={styles.items_by_categorie}
      >
        {showingImgs.map((item: itemTypes) => (
          <li key={item.id} className={styles.preview_imgs}>
            <img src={item.preview_img} alt="preview" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
