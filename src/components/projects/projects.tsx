import React, { Fragment, useEffect, useRef, useState } from "react";
import * as styles from "./projects.module.scss";
import { ProjectsType } from "../../types/dataTypes";
import autoAnimate from "@formkit/auto-animate";
import { PreviewProjectImg } from "../previewProjectsImg";
import { usePostSlugs } from "../../hooks/postSlugs";
import { Link } from "gatsby";
type ProjectsProps = {
  cuted: boolean;
};

type projectDataType = {
  frontmatter: ProjectsType;
  fields: { slug: string };
};
type CategoryType = string;

export const ProjectsComponent: React.FC<ProjectsProps> = ({ cuted }) => {
  const Data = usePostSlugs();

  const projectsRef = useRef(null);
  const projectsData: projectDataType[] = Data.map(
    (item: projectDataType) => item
  );
  const categories: CategoryType[] = Array.from(
    new Set(
      projectsData.map((proj: projectDataType) => proj.frontmatter.category)
    )
  );

  const [activeCategories, setActiveCategories] = useState<
    CategoryType | string
  >(categories[0]);

  const [showingImgs, setShowingImgs] = useState<projectDataType[]>([]);

  const handleFilteringThroughCategory = (category: string) => {
    const filteredData = projectsData.filter((item: projectDataType) => {
      console.log(category === item.frontmatter.category, "filter");
      return category === item.frontmatter.category;
    });
    if (category !== activeCategories) {
      setActiveCategories(category);
      setShowingImgs(filteredData);
    } else {
      return;
    }
  };
  console.log(showingImgs, activeCategories, "filtered data");
  useEffect(() => {
    projectsRef.current && autoAnimate(projectsRef.current);
  }, [projectsRef]);

  return (
    <div className={styles.projects_wrap}>
      <div className={styles.chose_categories}>
        {cuted && <span className={styles.title}>Browse all categories</span>}
        <ul className={styles.categories_picker}>
          {categories.map((item: CategoryType, i: number) => (
            <li key={i} data-picked={activeCategories === item}>
              <button onClick={() => handleFilteringThroughCategory(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ul ref={projectsRef} className={styles.items_by_categorie}>
        {showingImgs.map((item: projectDataType) => (
          <li key={item.frontmatter.id} className={styles.preview_imgs}>
            <Link to={item.fields.slug}>
              <PreviewProjectImg
                src={item.frontmatter.preview_img}
                title={item.frontmatter.title}
                slug={item.fields.slug}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
