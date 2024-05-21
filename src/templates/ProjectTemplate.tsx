import React, { useRef } from "react";
import { graphql } from "gatsby";
import { ReadyToBook } from "../components/readytoBook";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import * as styles from "./ProjectTemplate.module.scss";
import { Instagram } from "../icons/instagram";
import { Share } from "../icons/share";
import { ProjectsType } from "../types/dataTypes";
type PostTemplateProps = {
  data: {
    page: { frontmatter: ProjectsType };
  };
};
const ProjectTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  const { frontmatter } = data.page;
  const videoRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const reviewBlockRef = useRef(null);

  const feedbackBlockInView = useInView(reviewBlockRef, {
    amount: "some",
    once: true,
  });

  const h1InView = useInView(h1Ref, {
    amount: "all",
    once: true,
  });

  const pInView = useInView(pRef, {
    amount: "some",
    once: true,
  });

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["100% 50%", "0% 50%"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], ["0.85", "1.2"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["30px", "0px"]);

  return (
    <div className={styles.project_page_wrap}>
      <motion.div
        ref={videoRef}
        style={{ scaleX }}
        className={styles.video_block}
        transition={{ type: "spring", duration: 0.3, stiffness: 50 }}
      >
        <video autoPlay loop muted>
          <source src={frontmatter.preview_video} type="video/mp4"></source>
        </video>
        <div className={styles.project_disc}>
          <span>{frontmatter.location}</span>
          <span>{frontmatter.complete_date}</span>
        </div>
      </motion.div>
      <motion.div className={styles.project_info}>
        <h1
          ref={h1Ref}
          style={
            h1InView
              ? { opacity: "1", transform: "translateY(0px)" }
              : { opacity: "0", transform: "translateY(10px)" }
          }
        >
          About {frontmatter.title}
        </h1>
        <motion.p
          ref={pRef}
          style={pInView ? { opacity: "1" } : { opacity: "0" }}
        >
          {frontmatter.full_description}
        </motion.p>
      </motion.div>
      <div className={styles.imgs_wrap}>
        <div className={styles.all_imgs}>
          {frontmatter.all_img.map((item) => (
            <a key={item.imgId} href={item.postUrl}>
              <abbr title="check instagram post">
                <img src={item.imgUrl} alt="imgalbum" />
              </abbr>
            </a>
          ))}
        </div>
        <div className={styles.category}>
          <span>Category</span>
          <span>{frontmatter.category}</span>
        </div>
      </div>
      <motion.div ref={reviewBlockRef} className={styles.customer_review}>
        <div className={styles.customer_img}>
          <img
            style={
              feedbackBlockInView
                ? { opacity: "1", transform: "translateY(0)" }
                : { opacity: "0", transform: "translateY(20px)" }
            }
            src={frontmatter.customerReview.customerImg}
            alt="customer_pic"
          />
        </div>
        <div className={styles.review}>
          <a href={frontmatter.customerReview.link}>
            <p
              style={feedbackBlockInView ? { opacity: "1" } : { opacity: "0" }}
            >
              "{frontmatter.customerReview.customerFeedBack}"
            </p>
            <span>
              {frontmatter.customerReview.customerName} <Instagram /> <Share />
            </span>
          </a>
        </div>
      </motion.div>
      <ReadyToBook />
    </div>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        id
        title
        location
        category
        description
        full_description
        preview_video
        complete_date(fromNow: true)
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
      }
    }
  }
`;
