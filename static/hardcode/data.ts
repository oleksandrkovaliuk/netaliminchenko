import { link } from "fs";

export const Data = [
  {
    id: 1,
    title: "Nature photo shoots",
    location: "Edmonton , AB",
    category: "Nature shoot",
    short_disc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
    full_disc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
    all_img: [
      {
        imgId: 1,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 2,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 3,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 4,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 5,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 6,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 7,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 8,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 9,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 10,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 11,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 12,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
    ],
    customerReview: {
      link: "https://www.instagram.com/marbear365/",
      customerImg:
        "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-08%2018-11-20.png?alt=media&token=ca0e774c-0ab3-466d-b672-7f74bb73ea5a",
      customerFeedBack:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
      customerName: "Isome V",
    },
    prevew_img:
      "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-06%2016-48-26.png?alt=media&token=68ef7d73-5e1c-4e3a-a420-aa760f23304b",
  },
  {
    id: 2,
    location: "Edmonton , AB",
    title: "Personal photo shoot",
    category: "Nature shoot",
    short_disc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
    full_disc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
    all_img: [
      {
        imgId: 1,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 2,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 3,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 4,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 5,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 6,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 7,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 8,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 9,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 10,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 11,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 12,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
    ],
    customerReview: {
      link: "https://www.instagram.com/marbear365/",
      customerImg:
        "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-08%2018-11-20.png?alt=media&token=ca0e774c-0ab3-466d-b672-7f74bb73ea5a",
      customerFeedBack:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
      customerName: "Isome V",
    },
    prevew_img:
      "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-06%2016-48-26.png?alt=media&token=68ef7d73-5e1c-4e3a-a420-aa760f23304b",
  },
  {
    id: 3,
    title: "Wedding photo shoote",
    location: "Vancouver , BC",
    category: "Weeding shoot",
    short_disc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
    full_disc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
    all_img: [
      {
        imgId: 1,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 2,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 3,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 4,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 5,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 6,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 7,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 8,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 9,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 10,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 11,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 12,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
    ],
    customerReview: {
      link: "https://www.instagram.com/marbear365/",
      customerImg:
        "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-08%2018-11-20.png?alt=media&token=ca0e774c-0ab3-466d-b672-7f74bb73ea5a",
      customerFeedBack:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
      customerName: "Isome V",
    },
    prevew_img:
      "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-09.png?alt=media&token=3f6dcabc-1427-4cab-a260-ac729a55dda7",
  },
  {
    id: 4,
    title: "Girl photo shoot",
    location: "Vancouver , BC",
    category: "self shoot",
    short_disc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
    full_disc:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
    all_img: [
      {
        imgId: 1,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 2,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 3,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 4,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 5,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 6,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 7,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 8,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 9,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 10,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-58-44.png?alt=media&token=4423fd48-dd3a-4a6c-9cd8-0482ef847a6f",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 11,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
      {
        imgId: 12,
        imgUrl:
          "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-07%2013-57-52.png?alt=media&token=62e86e2f-bc9d-4c05-8f4c-854f272281d8",
        postUrl: "https://www.instagram.com/p/CkTlZBgp20i/?img_index=2",
      },
    ],
    customerReview: {
      link: "https://www.instagram.com/marbear365/",
      customerImg:
        "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-08%2018-11-20.png?alt=media&token=ca0e774c-0ab3-466d-b672-7f74bb73ea5a",
      customerFeedBack:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam, iure dignissimos, ad et dolorum illo nesciunt, impedit obcaecati tempore aliquam quidem suscipit itaque necessitatibus! Laborum consequatur repellat impedit ex.",
      customerName: "Isome V",
    },
    prevew_img:
      "https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2FScreenshot%20from%202024-05-06%2016-48-26.png?alt=media&token=68ef7d73-5e1c-4e3a-a420-aa760f23304b",
  },
];
