export type customerReviewTypes = {
  id: number;
  category: string;
  customerReview: {
    link: string;
    customerImg: string;
    customerFeedBack: string;
    customerName: string;
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
  slug: string;
};