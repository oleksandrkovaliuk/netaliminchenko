import { graphql, useStaticQuery } from "gatsby";
import { ProjectsType } from "../types/dataTypes";
type filterTypes = {
  filterBy: string;
  sortByTime: string;
};
export const useFilteredData = ({ filterBy, sortByTime }: filterTypes) => {
  const date = new Date();
  const week = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
  const month = new Date(date.getTime() - 30 * 24 * 60 * 60 * 1000);
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/project/" } } }) {
        nodes {
          frontmatter {
            title
            category
            preview_img {
              childImageSharp {
                gatsbyImageData
              }
            }
            complete_date
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  let resultData = nodes;
  if (resultData.length && filterBy !== " ") {
    resultData = resultData.filter(
      (item: { frontmatter: ProjectsType; fields: { slug: string } }) =>
        item.frontmatter.category === filterBy
    );
  }
  if (sortByTime !== " ") {
    if (sortByTime === "past week") {
      resultData = resultData.filter(
        (item: { frontmatter: ProjectsType }) =>
          new Date(item.frontmatter.complete_date) > week &&
          new Date(item.frontmatter.complete_date) <= date
      );
    }
    if (sortByTime === "past month") {
      resultData = resultData.filter(
        (item: { frontmatter: ProjectsType }) =>
          new Date(item.frontmatter.complete_date) > month &&
          new Date(item.frontmatter.complete_date) <= date
      );
    }
  }

  return resultData;
};
