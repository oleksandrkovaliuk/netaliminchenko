import React, { Fragment, useRef } from "react";
import * as styles from "./projectPage.module.scss";
import { Data } from "../../../static/hardcode/data";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Instagram } from "../../icons/instagram";
import { Share } from "../../icons/share";
import { ReadyToBook } from "../../components/readytoBook";
export const ProjectPageElem = () => {
  const videoRef = useRef(null);
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const reviewBlockRef = useRef(null);

  const feedbackBlockInView = useInView(reviewBlockRef, {
    amount: "all",
    once: true,
  });

  const h1InView = useInView(h1Ref, {
    amount: "all",
    once: true,
  });

  const pInView = useInView(pRef, {
    amount: "all",
    once: true,
  });

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["100% 50%", "0% 50%"],
  });

  const scaleX = useTransform(scrollYProgress, [0, 1], ["0.8", "1.2"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["30px", "0px"]);

  const location = new URLSearchParams(window.location.search);
  const projectId = location.get("projectId");
  const projectInfo = Data.filter((item) => item.id === Number(projectId));

  return (
    <Fragment>
      {projectInfo.map((item) => (
        <div key={item.id} className={styles.project_page_wrap}>
          <motion.div
            ref={videoRef}
            style={{ scaleX }}
            className={styles.video_block}
            transition={{ type: "spring", duration: 0.3, stiffness: 50 }}
          >
            <motion.video style={{ borderRadius }} autoPlay muted loop>
              <source src="https://firebasestorage.googleapis.com/v0/b/theater-53375.appspot.com/o/eventsImgs%2Fnatali%2Fvideoplayback.mp4?alt=media&token=411aed5a-8671-4927-bb2d-a815f92cf015"></source>
            </motion.video>
            <div className={styles.project_disc}>
              <span>{item.location}</span>
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
              About {item.title}
            </h1>
            <motion.p
              ref={pRef}
              style={pInView ? { opacity: "1" } : { opacity: "0" }}
            >
              {item.full_disc}
            </motion.p>
          </motion.div>
          <div className={styles.imgs_wrap}>
            <div className={styles.all_imgs}>
              {item.all_img.map((item) => (
                <a key={item.imgId} href={item.postUrl}>
                  <img src={item.imgUrl} alt="imgalbum" />
                </a>
              ))}
            </div>
            <div className={styles.category}>
              <span>Category</span>
              <span>{item.category}</span>
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
                src={item.customerReview.customerImg}
                alt="customer_pic"
              />
            </div>
            <div className={styles.review}>
              <p
                style={
                  feedbackBlockInView ? { opacity: "1" } : { opacity: "0" }
                }
              >
                "{item.customerReview.customerFeedBack}"
              </p>
              <a href={item.customerReview.link}>
                <span>
                  {item.customerReview.customerName} <Instagram /> <Share />
                </span>
              </a>
            </div>
          </motion.div>
          <ReadyToBook />
        </div>
      ))}
    </Fragment>
  );
};
