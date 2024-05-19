import { usePostSlugs } from "../hooks/postSlugs";
import { customerReviewTypes } from "../types/dataTypes";

export const getCategories = () => {
  const projects = usePostSlugs();
  const resultProjects: Set<string> = new Set(
    projects.map(
      (category: { frontmatter: customerReviewTypes }) =>
        category.frontmatter.category
    )
  );
  return Array.from(resultProjects);
};
