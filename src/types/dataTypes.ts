export type customerReviewTypes = {
  id: number;
  category: string;
  customerReview: {
    link: string;
    customerImg: string;
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
  preview_img: string;
  preview_video: string;
  complete_date: string;
  all_imgs: [
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
  slug: string;
};
