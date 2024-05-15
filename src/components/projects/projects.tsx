import React, { Fragment, useEffect, useRef, useState } from "react";
import * as styles from "./projects.module.scss";
import { useExtractAllProjects } from "../../hooks/posts";
import { customerReviewTypes } from "../../types/dataTypes";
import autoAnimate from "@formkit/auto-animate";
import { PreviewProjectImg } from "../previewProjectsImg";
type itemTypes = {
  id: number;
  item: string;
  preview_img: string;
};
type ProjectsProps = {
  cuted: boolean;
};
type CategoryType = string;
export const ProjectsComponent: React.FC<ProjectsProps> = ({ cuted }) => {
  const Data = useExtractAllProjects();

  const projectsRef = useRef(null);
  const getCategories = new Set(
    Data.map(
      (item: { frontmatter: customerReviewTypes }) => item.frontmatter.category
    )
  );

  const collectCategories = [...getCategories];

  const [activeCategories, setActiveCategories] = useState(
    collectCategories[0]
  );

  const [showingImgs, setShowingImgs] = useState([]);

  useEffect(() => {
    const filteredItem = Data.map(
      (project: { frontmatter: customerReviewTypes }) => project.frontmatter
    ).filter((item: customerReviewTypes) => activeCategories === item.category);
    setShowingImgs(filteredItem);
  }, [activeCategories]);

  useEffect(() => {
    projectsRef.current && autoAnimate(projectsRef.current);
  }, [projectsRef]);

  return (
    <div className={styles.projects_wrap}>
      <div className={styles.chose_categories}>
        {cuted && <span className={styles.title}>Browse all categories</span>}
        <ul className={styles.categories_picker}>
          {collectCategories.map((item: CategoryType) => (
            <li key={item} data-picked={activeCategories === item}>
              <button onClick={() => setActiveCategories(item)}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
      <ul ref={projectsRef} className={styles.items_by_categorie}>
        {showingImgs.map((item: itemTypes) => (
          <li key={item.id} className={styles.preview_imgs}>
            <PreviewProjectImg src={item.preview_img} />
          </li>
        ))}
      </ul>
    </div>
  );
};
