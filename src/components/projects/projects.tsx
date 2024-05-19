import React, { useEffect, useRef, useState } from "react";
import * as styles from "./projects.module.scss";
import { ProjectsType } from "../../types/dataTypes";
import autoAnimate from "@formkit/auto-animate";
import { PreviewProjectImg } from "../previewProjectsImg";
import { usePostSlugs } from "../../hooks/postSlugs";
import { Link } from "gatsby";
import { useFilteredData } from "../../hooks/filteredContent";
import { RightTo } from "../../icons/rightTo";
import { color, motion } from "framer-motion";
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
  const optionListRef = useRef<HTMLUListElement>(null);
  const optionList = optionListRef.current?.getBoundingClientRect() || {height: 0}
  const optionListStyle = optionList?.height + 7;
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
  const [sortBy, setSortBy] = useState("");
  const [sortMenuIsOpen, setSortMenuIsOpen] = useState(false);
  const filteredData = useFilteredData({
    filterBy: activeCategories,
    sortByTime: sortBy,
  });

  const handleFilteringThroughCategory = (category: string) => {
    setActiveCategories(category);
  };
  const handleGetSelection = (sort: string) => {
    if (sort) {
      setSortBy(sort);
      setSortMenuIsOpen(false);
    } else {
      return;
    }
  };
  useEffect(() => {
    projectsRef.current && autoAnimate(projectsRef.current);
  }, [projectsRef]);
  return (
    <div className={styles.projects_wrap}>
      <div
        className={styles.chose_categories}
        style={
          !cuted
            ? {
                marginLeft: "unset",
                paddingInline: "20px",
                flexDirection: "unset",
                justifyContent: "space-between",
                alignItems: "flex-end",
                maxWidth: "unset",
              }
            : { marginLeft: "auto", paddingInline: "150px" }
        }
      >
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
        {!cuted && (
          <div className={styles.sort_wrap}>
            <motion.button
              whileTap={{ scale: "0.98" }}
              onClick={() => setSortMenuIsOpen(!sortMenuIsOpen)}
              className={styles.sort_button}
            >
              {!sortBy ? "Sort by" : sortBy}{" "}
              <span
                className={styles.sort_svg}
                data-menuisopen={sortMenuIsOpen}
              >
                <RightTo />
              </span>
            </motion.button>
            <motion.ul
              ref={optionListRef}
              animate={
                sortMenuIsOpen
                  ? { opacity: "1", pointerEvents: "unset", scale: "1" }
                  : { opacity: "0", pointerEvents: "none", scale: "0.98" }
              }
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className={styles.option_list}
              style={{
                bottom: `calc(-${optionListStyle}px)`,
              }}
            >
              <motion.li className={styles.option}>
                <button
                  style={
                    sortBy === "all projects"
                      ? {
                          backgroundColor: "var(--color-white)",
                          color: "var(--color-bg)",
                        }
                      : {
                          backgroundColor: "var(--color-bg)",
                          color: "var(--color-white)",
                        }
                  }
                  onClick={() => handleGetSelection("all projects")}
                >
                  all projects
                </button>
              </motion.li>
              <motion.li className={styles.option}>
                <button
                  style={
                    sortBy === "past week"
                      ? {
                          backgroundColor: "var(--color-white)",
                          color: "var(--color-bg)",
                        }
                      : {
                          backgroundColor: "var(--color-bg)",
                          color: "var(--color-white)",
                        }
                  }
                  onClick={() => handleGetSelection("past week")}
                >
                  past week
                </button>
              </motion.li>
              <motion.li className={styles.option}>
                <button
                  style={
                    sortBy === "past month"
                      ? {
                          backgroundColor: "var(--color-white)",
                          color: "var(--color-bg)",
                        }
                      : {
                          backgroundColor: "var(--color-bg)",
                          color: "var(--color-white)",
                        }
                  }
                  onClick={() => handleGetSelection("past month")}
                >
                  past month
                </button>
              </motion.li>
            </motion.ul>
          </div>
        )}
      </div>
      <ul ref={projectsRef} className={styles.items_by_categorie}>
        {filteredData.map((item: projectDataType) => (
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
        {!filteredData.length && (
          <li className={styles.empty}>No project by this date...</li>
        )}
      </ul>
    </div>
  );
};
