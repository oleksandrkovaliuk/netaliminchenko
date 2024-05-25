import React, { useEffect, useRef, useState } from "react";
import * as styles from "./projects.module.scss";
import { ProjectsType } from "../../types/dataTypes";
import autoAnimate from "@formkit/auto-animate";
import { PreviewProjectImg } from "../previewProjectsImg";
import { Link } from "gatsby";
import { useFilteredData } from "../../hooks/filteredContent";
import { RightTo } from "../../icons/rightTo";
import { motion } from "framer-motion";
import { getCategories } from "../../services/getCategory";
type ProjectsProps = {
  cuted: boolean;
};

type projectDataType = {
  frontmatter: ProjectsType;
  fields: { slug: string };
};

export const ProjectsComponent: React.FC<ProjectsProps> = ({ cuted }) => {
  const projects: string[] = getCategories();
  const projectsRef = useRef(null);
  const optionListRef = useRef<HTMLUListElement>(null);
  const optionList = optionListRef.current?.getBoundingClientRect() || {
    height: 0,
  };
  const optionListStyle = optionList?.height + 7;
  const [activeCategories, setActiveCategories] = useState<string>(projects[0]);
  const [sortBy, setSortBy] = useState("all projects");
  const [sortMenuIsOpen, setSortMenuIsOpen] = useState(false);
  const filteredData = useFilteredData({
    filterBy: activeCategories,
    sortByTime: sortBy,
  }).slice(0, 4);

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
    <div
      className={styles.projects_wrap}
      style={cuted ? { marginBottom: "0px" } : { marginBottom: "100px" }}
    >
      <div
        className={styles.chose_categories}
        style={
          !cuted
            ? {
                marginLeft: "unset",
                paddingInline: "10px",
                flexDirection: "unset",
                justifyContent: "space-between",
                alignItems: "flex-end",
                maxWidth: "unset",
              }
            : {
                // marginLeft: "auto",
                paddingInline: "unset",
              }
        }
      >
        {cuted && <span className={styles.title}>Browse all categories</span>}
        <ul className={styles.categories_picker}>
          {projects.map((item: string) => (
            <li key={item} data-picked={activeCategories === item}>
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
              {sortBy}
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
          <li key={item.fields.slug} className={styles.preview_imgs}>
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
