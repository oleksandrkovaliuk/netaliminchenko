import React, { useState } from "react";
import * as styles from "./contactOrBook.module.scss";
import { motion } from "framer-motion";
import { formSchema } from "../../validation/formValidation";
import { navigate } from "gatsby";
import { toast } from "sonner";
const encode = (data: { [key: string]: string }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

type ValidationType = {
  email: boolean;
  name: boolean;
  details: boolean;
  message: string;
};
export const ContactOrBookTemplate = () => {
  const [validationError, setValidationError] = useState<ValidationType>({
    email: false,
    name: false,
    details: false,
    message: " ",
  });
  const [isValid, setIsValid] = useState(false);
  const handleFormValidation = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const formatDate = (date: Date) => {
      return date
        .toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        .replace(",", "");
    };

    try {
      const formValues: { [key: string]: string } = {
        name: formData.get("name")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        details: formData.get("details")?.toString() || "",
      };

      await formSchema.validate(formValues, {
        strict: true,
      });
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact_me",
          ...formValues,
        }),
      });
      navigate("/");
      toast.message(`Thank you ${formData.get("name")} 🖤`, {
        description: `Your form has been submiten at ${formatDate(new Date())}`,
      });
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
      setValidationError((prevState) => ({
        ...prevState,
        email: error?.toString().includes("email") || false,
        name: error?.toString().includes("name") || false,
        details: error?.toString().includes("details") || false,
        message: error?.toString().split(":").pop() || "",
      }));
    }
  };
  return (
    <div className={styles.contact_or_book_wrap}>
      <h1 className={styles.title}>Let’s do this!</h1>
      {/* <div className={styles.formtype_picker}>
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
      </div> */}
      <div className={styles.form_block}>
        <div className={styles.left_img}>
          <img src="/withCamera.png" alt="netali_photo" />
        </div>
        <form className={styles.form} onSubmit={handleFormValidation}>
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <span className={styles.form_title}>Contact</span>
          <p className={styles.note}>
            Note: Fill the form and once you submit her ill contact with you
            shortly. Thank for your trust.
          </p>
          <div className={styles.form_field_wrap}>
            <input
              placeholder=" "
              type="text"
              id="customerName"
              name="name"
              autoComplete="off"
              className={styles.form_input}
              style={
                validationError.name && !isValid
                  ? { borderColor: "red" }
                  : { borderColor: "var(--color-gray)" }
              }
            />
            <label htmlFor="customerName" className={styles.form_label}>
              First and last name
            </label>
          </div>
          <div className={styles.form_field_wrap}>
            <input
              placeholder=" "
              type="email"
              id="customerEmail"
              name="email"
              autoComplete="off"
              className={styles.form_input}
              style={
                validationError.email && !isValid
                  ? { borderColor: "red" }
                  : { borderColor: "var(--color-gray)" }
              }
            />
            <label htmlFor="customerEmail" className={styles.form_label}>
              Email address
            </label>
          </div>

          {/* {!contactCheck && (
            <Fragment>
              <motion.div
                animate={
                  !contactCheck
                    ? { opacity: "1", transform: "translateY(0px)" }
                    : {
                        opacity: "0",
                        transform: "translateY(10px)",
                        height: 0,
                        marginBottom: "0px",
                      }
                }
                className={styles.select_field_wrap}
              >
                <select
                  id="selectCategory"
                  name="selectCategory"
                  autoComplete="off"
                  className={styles.select_category}
                  onChange={(event) => setChosenCategory(event.target?.value)}
                  value={chosenCategory}
                >
                  {projects.map((item: string, index: number) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span className={styles.select_label}>
                  Chose session category
                </span>
                <span className={styles.select_arrow}>
                  <RightTo />
                </span>
              </motion.div>

              <motion.div
                animate={
                  !contactCheck && chosenCategory === "Weeding shoot"
                    ? { opacity: "1", transform: "translateY(0px)" }
                    : {
                        opacity: "0",
                        transform: "translateY(10px)",
                        height: 0,
                        marginBottom: "0px",
                      }
                }
                style={
                  chosenCategory === "Weeding shoot"
                    ? { maxWidth: "100%" }
                    : { maxWidth: "200px" }
                }
                className={styles.select_field_wrap}
              >
                <select
                  id="selectWeedingCategory"
                  name="selectWeedingCategory"
                  autoComplete="off"
                  className={styles.select_category}
                  style={{ maxWidth: "300px!important" }}
                >
                  <option value="Elopement">
                    Elopement (you two + under 15 guests)
                  </option>
                  <option value="Intimate">Intimate (under 50 guests)</option>
                  <option value="Midsize">
                    Mid celebration (50 - 100 guests)
                  </option>
                  <option value="Bigsize">Big celebration (100+ guests)</option>
                </select>
                <span className={styles.select_label}>
                  Chose your weeding type
                </span>
                <span className={styles.select_arrow}>
                  <RightTo />
                </span>
              </motion.div>

              <motion.div
                animate={
                  !contactCheck && chosenCategory !== "Weeding shoot"
                    ? { opacity: "1", transform: "translateY(0px)" }
                    : {
                        opacity: "0",
                        height: 0,
                        marginBottom: "0px",
                      }
                }
                style={{
                  maxWidth: "100%",
                }}
                className={styles.select_field_wrap}
              >
                <select
                  id="selectPersonalNaturePhotoShoot"
                  name="selectPersonalNaturePhotoShoot"
                  autoComplete="off"
                  className={styles.select_category}
                  onChange={(event) =>
                    setIsOther(event.target?.value === "Other" ? true : false)
                  }
                >
                  <option value="LifeStyle">Lifestyle/couple</option>
                  <option value="Studio">Studio headshots</option>
                  <option value="Event">Event</option>
                  <option value="RealEstate">Real Estate</option>
                  <option value="Other">Other</option>
                </select>
                <span className={styles.select_label}>
                  Chose your {chosenCategory} type
                </span>
                <span className={styles.select_arrow}>
                  <RightTo />
                </span>
              </motion.div>

              <motion.div
                className={styles.form_field_wrap}
                animate={
                  !contactCheck && isOther && chosenCategory !== "Weeding shoot"
                    ? { opacity: "1", transform: "translateY(0px)" }
                    : {
                        opacity: "0",
                        height: 0,
                        marginBottom: "0px",
                      }
                }
                style={{
                  maxWidth: "100%",
                }}
              >
                <input
                  placeholder=" "
                  type="text"
                  id="otherType"
                  name="otherType"
                  autoComplete="off"
                  className={styles.form_input}
                />
                <label htmlFor="otherType" className={styles.form_label}>
                  Which type of shot you would like
                </label>
              </motion.div>
            </Fragment>
          )} */}
          <div className={styles.form_field_wrap}>
            <textarea
              placeholder=" "
              id="details"
              name="details"
              autoComplete="off"
              className={styles.form_textarea}
              style={
                validationError.details && !isValid
                  ? { borderColor: "red" }
                  : { borderColor: "var(--color-gray)" }
              }
            />
            <label htmlFor="customerName" className={styles.form_label}>
              Tell me more details
            </label>
          </div>
          <motion.button
            whileTap={{ scale: "0.95" }}
            type="submit"
            className={styles.submit_form}
          >
            Submit contant form
          </motion.button>
          {!isValid && (
            <span className={styles.error} style={{ color: "red" }}>
              {validationError.message}
            </span>
          )}
        </form>
      </div>
    </div>
  );
};
