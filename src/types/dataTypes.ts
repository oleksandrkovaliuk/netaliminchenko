import { IGatsbyImageData } from "gatsby-plugin-image";
export type customerReviewTypes = {
  id: number;
  category: string;
  customerReview: {
    link: string;
    customerImg: IGatsbyImageData;
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
  preview_img: IGatsbyImageData;
  preview_video: {
    publicURL: string;
  };
  complete_date: string;
  all_imgs: [
    {
      imgUrl: IGatsbyImageData;
      postUrl: string;
    }
  ];
  customerReview: {
    link: string;
    customerImg: IGatsbyImageData;
    customerFeedBack: string;
    customerName: string;
  };
  slug: string;
};
export type PageData = {
  data: {
    page: { frontmatter: ProjectsType };
  };
};