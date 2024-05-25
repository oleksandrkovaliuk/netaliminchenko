import React, { useRef } from "react";
import * as styles from "./projectCard.module.scss";
import { Link } from "gatsby";
import { motion, useInView } from "framer-motion";
import { Location } from "../../icons/location";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { formatingTime } from "../../services/formatingTime";
type ProjectCardType = {
  preview_img: IGatsbyImageData;
  slug: string;
  title: string;
  description: string;
  index: number;
  location: string;
  completedDate: string;
};
export const ProjectCard: React.FC<ProjectCardType> = ({
  preview_img,
  slug,
  title,
  description,
  index,
  location,
  completedDate,
}) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, {
    amount: "all",
    once: true,
  });
  const isCardEven = (index + 1) % 2 === 0;
  return (
    <div ref={cardRef} className={styles.project_card}>
      <div
        style={cardInView ? { scale: "1" } : { scale: "0.9" }}
        className={styles.img_block}
      >
        <GatsbyImage image={getImage(preview_img)} alt="projectImgs" />

        <Link to={slug}>
          <button className={styles.explore_btn}>
            Explore <span>{title}</span> <span>more</span>
          </button>
        </Link>
      </div>

      <motion.div
        animate={
          !isCardEven
            ? {
                x: cardInView
                  ? window?.innerWidth < 768
                    ? window?.innerWidth < 630
                      ? "150%"
                      : "120%"
                    : " 160%"
                  : "19%",
              }
            : {
                x: cardInView
                  ? window?.innerWidth < 768
                    ? window?.innerWidth < 630
                      ? "-150%"
                      : "-120%"
                    : "-160%"
                  : "-16%",
              }
        }
        transition={{ type: "spring", duration: 0.3, stiffness: 50 }}
        className={styles.right_disc}
        style={
          cardInView
            ? { maxWidth: "300px", transition: "max-width 0s ease-in-out" }
            : { maxWidth: "200px", transition: "max-width 0.8s ease-in-out" }
        }
      >
        <h1>{title}</h1>
        <p>{description}</p>
        <div className={styles.location_time}>
          <span className={styles.location}>
            <Location />
            {location}
          </span>
          <span>{formatingTime(completedDate)}</span>
        </div>
      </motion.div>
    </div>
  );
};
