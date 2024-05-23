import { graphql, useStaticQuery } from "gatsby";
export const usePostSlugs = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/project/" } } }) {
        nodes {
          frontmatter {
            title
            location
            preview_img {
              childImageSharp {
                gatsbyImageData
              }
            }
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
