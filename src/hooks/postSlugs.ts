import { graphql, useStaticQuery } from "gatsby";
export const usePostSlugs = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/project/" } } }
        sort: { frontmatter: { complete_date: DESC } }
      ) {
        nodes {
          frontmatter {
            id
            title
            location
            preview_img
            description
            category
            complete_date
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  return nodes;
};
