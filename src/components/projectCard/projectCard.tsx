import React, { Fragment, useRef } from "react";
import * as styles from "./projectCard.module.scss";
import { Link } from "gatsby";
import { motion, useInView } from "framer-motion";
import { Location } from "../../icons/location";
interface ProjectCardProps {
  img: string;
  title: string;
  shortDisc: string;
  id: number;
  location: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  title,
  shortDisc,
  id,
  location,
}) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, {
    amount: "all",
    once: true,
  });

  const isCardEven = id % 2 === 0;

  return (
    <div ref={cardRef} className={styles.project_card}>
      <div
        style={cardInView ? { scale: "1" } : { scale: "0.9" }}
        className={styles.img_block}
      >
        <img src={img} alt="projectImgs" />

        <Link to={`/projectPage?projectId=${id}`}>
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
        <p>{shortDisc}</p>
        <span className={styles.location}>
          <Location />
          {location}
        </span>
      </motion.div>
    </div>
  );
};
