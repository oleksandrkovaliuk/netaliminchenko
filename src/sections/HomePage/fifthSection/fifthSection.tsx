import React from "react";
import * as styles from "./fifthSection.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Instagram } from "../../../icons/instagram";
import { Share } from "../../../icons/share";
import { ReadyToBook } from "../../../components/readytoBook";
import Slider from "react-slick";
import "./slider.scss";
import { useExtractAllProjects } from "../../../hooks/fullPost";
import { customerReviewTypes } from "../../../types/dataTypes";
import { Link } from "gatsby";
export const FifthSection = () => {
  const Data = useExtractAllProjects();
  const settings = {
    focusOnSelect: true,
    dots: true,
    arrows: false,
    swipe: false,
    customPaging: () => <span className="dot"></span>,
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.fifth_wrap}>
      <div className={styles.kind_word}>
        <span className={styles.title}>Kind words</span>
        <div className={styles.kind_words_container}>
          <Slider {...settings}>
            {Data.map(
              (item: {
                frontmatter: customerReviewTypes;
                fields: { slug: string };
              }) => (
                <div key={item.fields.slug} className={styles.kind_words_wrap}>
                  <div className={styles.review_text}>
                    <p>"{item.frontmatter.customerReview.customerFeedBack}"</p>
                    <div className={styles.customer}>
                      <a href={item.frontmatter.customerReview.link}>
                        <span>
                          {item.frontmatter.customerReview.customerName}{" "}
                          <Instagram /> <Share />
                        </span>
                      </a>
                      <Link to={item.fields.slug}>
                        <span>Project</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
      <ReadyToBook />
    </div>
  );
};
