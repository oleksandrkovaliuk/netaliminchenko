import React, { useEffect, useRef, useState } from "react";
import * as styles from "./fourthSection.module.scss";
import { motion, useInView } from "framer-motion";
import { useExtractAllProjects } from "../../../hooks/posts";
type categoryTypes = {
  id: number;
  category: string;
  customerReview: {
    link: string;
    customerImg: string;
    customerFeedBack: string;
    customerName: string;
  };
};
type itemTypes = {
  id: number;
  item: string;
  prevew_img: string;
};
export const FourthSection = () => {
  const Data = useExtractAllProjects();
  const imgsRef = useRef(null);

  const imgsInView = useInView(imgsRef, { amount: "some", once: true });
  const getCategories = new Set(
    Data.map((item: categoryTypes) => item.category)
  );
  const collectCategories = [...getCategories];

  const [activeCategories, setActiveCategories] = useState<string>(
    collectCategories[0] || " "
  );
  const [showingImgs, setShowingImg] = useState([]);
  const [onSelectCategory, setOnSelectCategory] = useState(false);
  useEffect(() => {
    const filteredItem = Data.filter(
      (item: categoryTypes) => activeCategories === item.category
    );
    setShowingImg(filteredItem);
    setOnSelectCategory(!onSelectCategory);
  }, [activeCategories]);
  useEffect(() => {
    setOnSelectCategory(false);
  }, []);
  return (
    <div className={styles.categories_wrap}>
      <div className={styles.chose_categories}>
        <span className={styles.title}>Browse all categories</span>
        <ul className={styles.categories_picker}>
          {collectCategories.map((item) => (
            <li
              key={item}
              data-picked={activeCategories === item}
              className={styles.categories}
            >
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
            <img src={item.prevew_img} alt="preview" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
