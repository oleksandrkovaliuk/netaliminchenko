import React, { useRef } from "react";
import * as styles from "./projectCard.module.scss";
import { Link } from "gatsby";
import { motion, useInView } from "framer-motion";
import { Location } from "../../icons/location";
type ProjectCardType = {
  preview_img: string;
  slug: string;
  title: string;
  description: string;
  id: number;
  location: string;
};
export const ProjectCard: React.FC<ProjectCardType> = ({
  preview_img,
  slug,
  title,
  description,
  id,
  location,
}) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, {
    amount: "all",
    once: true,
  });

  const isCardEven = id % 2 === 0;
  console.log(
    preview_img,
    slug,
    title,
    description,
    id,
    location,
    "incoming data to projects"
  );

  return (
    <div ref={cardRef} className={styles.project_card}>
      <div
        style={cardInView ? { scale: "1" } : { scale: "0.9" }}
        className={styles.img_block}
      >
        <img src={preview_img} alt="projectImgs" />

        <Link to={slug}>
          <button className={styles.explore_btn}>Explore more</button>
        </Link>
      </div>

      <motion.div
        animate={
          !isCardEven
            ? {
                x: cardInView ? "120%" : "12%",
              }
            : {
                x: cardInView ? "-120%" : "-10%",
              }
        }
        transition={{ type: "spring", duration: 0.3, stiffness: 50 }}
        className={styles.right_disc}
        style={
          cardInView
            ? { maxWidth: "400px", transition: "max-width 0s ease-in-out" }
            : { maxWidth: "300px", transition: "max-width 0.8s ease-in-out" }
        }
      >
        <h1>{title}</h1>
        <p>{description}</p>
        <span className={styles.location}>
          <Location />
          {location}
        </span>
      </motion.div>
    </div>
  );
};
