import { graphql, useStaticQuery } from "gatsby";
type resultTypes = {
  frontmatter: {
    id: number;
    title: string;
    location: string;
    description: string;
    prevew_img: string;
  };
  fields: {
    slug: string;
  };
};
export const usePostSlugs = () => {
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
            id
            title
            location
            preview_img
            description
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
