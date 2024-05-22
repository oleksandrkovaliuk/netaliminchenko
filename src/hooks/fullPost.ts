import { graphql, useStaticQuery } from "gatsby";
export const useExtractAllProjects = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fields: { slug: { regex: "/project/" } } }) {
        nodes {
          frontmatter {
            title
            location
            category
            description
            full_description
            preview_img
            all_imgs {
              imgUrl
              postUrl
            }
            customerReview {
              link
              customerImg
              customerFeedBack
              customerName
            }
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
