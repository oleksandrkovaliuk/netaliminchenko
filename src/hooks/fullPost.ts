import { graphql, useStaticQuery } from "gatsby";
export const useExtractAllProjects = () => {
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
            category
            description
            full_description
            preview_img
            all_img {
              imgId
              imgUrl
              postUrl
            }
            customerReview {
              link
              customerImg
              customerFeedBack
              customerName
            }
            id
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
