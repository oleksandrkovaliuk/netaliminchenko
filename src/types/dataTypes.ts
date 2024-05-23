import { IGatsbyImageData } from "gatsby-plugin-image";

export type customerReviewTypes = {
  id: number;
  category: string;
  customerReview: {
    link: string;
    customerImg: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    customerFeedBack: string;
    customerName: string;
  };
  fields: {
    slug: string;
  };
};

export type ProjectsType = {
  id: number;
  title: string;
  location: string;
  category: string;
  description: string;
  full_description: string;
  preview_img: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  preview_video: {
    publicURL: string;
  };
  complete_date: string;
  all_imgs: [
    {
      imgUrl: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
      };
      postUrl: string;
    }
  ];
  customerReview: {
    link: string;
    customerImg: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
    customerFeedBack: string;
    customerName: string;
  };
  slug: string;
};
