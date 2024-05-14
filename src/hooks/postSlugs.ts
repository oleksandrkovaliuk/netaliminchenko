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
            complete_date(fromNow: true)
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
