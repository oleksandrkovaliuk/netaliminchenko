import React, { useState } from "react";
import * as styles from "./contactOrBook.module.scss";
import { motion } from "framer-motion";
export const ContactOrBookTemplate = () => {
  const [contactCheck, setContactCheck] = useState(true);
  const [bookCheck, setBookCheck] = useState(false);
  const handleCheckBoxCheck = () => {
    setContactCheck(!contactCheck);
    setBookCheck(!bookCheck);
  };
  console.log(contactCheck, bookCheck, "check");
  return (
    <div className={styles.contact_or_book_wrap}>
      <h1 className={styles.title}>Let’s do this!</h1>
      <div className={styles.formtype_picker}>
        <motion.span
          className={styles.switcher}
          animate={
            contactCheck
              ? { left: "-1px", right: "unset" }
              : { right: "-1px", left: "unset" }
          }
          transition={{ duration: 0.3 }}
        />
        <div className={styles.checker}>
          <input
            type="checkbox"
            id="check_formytype"
            name="check_formytype"
            className={styles.checkbox}
            onChange={handleCheckBoxCheck}
          />
          <label
            style={
              contactCheck
                ? { color: "var(--color-bg)" }
                : { color: "var(--color-white)" }
            }
            htmlFor="check_formytype"
            className={styles.check_label}
          >
            Contact me
          </label>
        </div>
        <div className={styles.checker}>
          <input
            type="checkbox"
            id="check_formytype"
            name="check_formytype"
            className={styles.checkbox}
            onChange={handleCheckBoxCheck}
          />
          <label
            style={
              bookCheck
                ? { color: "var(--color-bg)" }
                : { color: "var(--color-white)" }
            }
            htmlFor="check_formytype"
            className={styles.check_label}
          >
            Book now
          </label>
        </div>
      </div>
      <div className={styles.form_block}>
        <div className={styles.left_img}>
          <img src="/withCamera.png" alt="netali_photo" />
        </div>
        <form className={styles.form}>
          <span className={styles.form_title}>
            {contactCheck ? "Contact" : "Book"}
          </span>
        </form>
      </div>
    </div>
  );
};
