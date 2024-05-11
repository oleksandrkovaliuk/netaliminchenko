import React, { useEffect, useState } from "react";
import * as styles from "./fourthSection.module.scss";
import { Data } from "../../../../static/hardcode/data";

export const FourthSection = () => {
  const getCategories = new Set(Data.map((item) => item.category));
  const collectCategories = [...getCategories];

  const [activeCategories, setActiveCategories] = useState<string>(
    collectCategories[0] || ""
  );
  const [showingImgs, setShowingImg] = useState(null);
  useEffect(() => {
    const filteredItem = Data.filter(
      (item) => activeCategories === item.category
    )
      .map((filtered) => filtered.all_img)
      .flatMap((imgs) => imgs);
    setShowingImg(filteredItem);
  }, [activeCategories]);

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

      <ul className={styles.items_by_categorie}>
        {showingImgs?.slice(0, 9).map((item) => (
          <li key={item.imgId} className={styles.preview_imgs}>
            <img src={item.imgUrl} alt="preview" />
          </li>
        ))}
      </ul>
    </div>
  );
};
