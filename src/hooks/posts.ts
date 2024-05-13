import { graphql, useStaticQuery } from "gatsby";
type resultTypes = {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  full_description: string;
  prevew_img: string;
  all_img: [
    {
      imgId: number;
      imgUrl: string;
      postUrl: string;
    }
  ];
  customerReview: {
    link: string;
    customerImg: string;
    customerFeedBack: string;
    customerName: string;
  };
};
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
        }
      }
    }
  `);
  return nodes;
};
