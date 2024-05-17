import { graphql, useStaticQuery } from "gatsby";
import { ProjectsType } from "../types/dataTypes";

export const useFilteredData = (filterBy: string) => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/project/" } } }
        sort: { frontmatter: { id: ASC } }
      ) {
        nodes {
          frontmatter {
            title
            category
            preview_img
            id
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  if (nodes.length) {
    const resultData = nodes.filter(
      (item: { frontmatter: ProjectsType; fields: { slug: string } }) =>
        item.frontmatter.category === filterBy
    );
    return resultData;
  }
};
