import React from "react";
import * as styles from "./fifthSection.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Instagram } from "../../../icons/instagram";
import { Share } from "../../../icons/share";
import { ReadyToBook } from "../../../components/readytoBook";
import Slider from "react-slick";
import "./slider.scss";
import { useExtractAllProjects } from "../../../hooks/posts";
import { customerReviewTypes } from "../../../types/dataTypes";
import { Link } from "gatsby";
export const FifthSection = () => {
  const Data = useExtractAllProjects();
  const settings = {
    dots: true,
    arrows: false,
    centerMode: true,
    swipe: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: () => <span className="dot"></span>,
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
                <div
                  key={item.frontmatter.id}
                  className={styles.kind_words_wrap}
                >
                  <div className={styles.review_text}>
                    <p>"{item.frontmatter.customerReview.customerFeedBack}""</p>
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
