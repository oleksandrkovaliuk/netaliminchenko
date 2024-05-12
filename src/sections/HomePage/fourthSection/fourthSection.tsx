import React, { useEffect, useRef, useState } from "react";
import * as styles from "./fourthSection.module.scss";
import { Data } from "../../../../static/hardcode/data";
import { motion, useInView } from "framer-motion";
export const FourthSection = () => {
  const imgsRef = useRef(null);

  const imgsInView = useInView(imgsRef, { amount: "some", once: true });
  const getCategories = new Set(Data.map((item) => item.category));
  const collectCategories = [...getCategories];

  const [activeCategories, setActiveCategories] = useState<string>(
    collectCategories[0] || ""
  );
  const [showingImgs, setShowingImg] = useState(null);
  const [onSelectCategory, setOnSelectCategory] = useState(false);
  useEffect(() => {
    const filteredItem = Data.filter(
      (item) => activeCategories === item.category
    );
    setShowingImg(filteredItem);
    setOnSelectCategory(!onSelectCategory);
  }, [activeCategories]);
  useEffect(() => {
    setOnSelectCategory(false);
  }, []);

  console.log(onSelectCategory);
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
        {showingImgs?.map((item) => (
          <li key={item.id} className={styles.preview_imgs}>
            <img src={item.prevew_img} alt="preview" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
};
