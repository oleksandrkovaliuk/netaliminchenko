
export type ImageSharpFluid = {
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};
export type customerReviewTypes = {
  id: number;
  category: string;
  customerReview: {
    link: string;
    customerImg: {
      childImageSharp: {
        fluid: ImageSharpFluid;
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
      fluid: ImageSharpFluid;
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
          fluid: ImageSharpFluid;
        };
      };
      postUrl: string;
    }
  ];
  customerReview: {
    link: string;
    customerImg: {
      childImageSharp: {
        fluid: ImageSharpFluid;
      };
    };
    customerFeedBack: string;
    customerName: string;
  };
  slug: string;
};
