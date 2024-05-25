import React, { Fragment, useEffect, useState } from "react";
import * as style from "./header.module.scss";
import { Telegram } from "../../icons/telegram";
import { Instagram } from "../../icons/instagram";
import { Link } from "gatsby";
import { motion } from "framer-motion";
export const Header = () => {
  const [appearHeader, setAppearHeader] = useState(true);
  const [headerOnTop, setHeaderOnTop] = useState(true);

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  useEffect(() => {
    let prevScroll = window.scrollY;
    const appearHeader = () => {
      const currScroll = window.scrollY;
      if (currScroll === 0) {
        setHeaderOnTop(true);
      } else {
        setHeaderOnTop(false);
      }
      if (prevScroll < currScroll) {
        setAppearHeader(false);
        setMobileMenuIsOpen(false);
      }
      if (prevScroll > currScroll) {
        setAppearHeader(true);
      }
      prevScroll = currScroll;
    };
    window.addEventListener("scroll", appearHeader);
    return () => {
      window.removeEventListener("scroll", appearHeader);
    };
  }, []);
  return (
    <Fragment>
      {mobileMenuIsOpen && (
        <div className={style.bg} onClick={() => setMobileMenuIsOpen(false)} />
      )}

      <div
        style={{
          top: headerOnTop ? "0px" : appearHeader ? "10px" : "-100px",
          borderRadius: !headerOnTop ? "8px" : "0px",
          maxWidth: headerOnTop
            ? ""
            : window?.innerWidth < 600
            ? "350px"
            : "600px",
          margin: "auto",
        }}
        className={style.header_wrap}
      >
        <div className={style.nav_wraper}>
          <abbr title="back to home">
            <Link
              className={style.logo}
              to="/"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              nl
            </Link>
          </abbr>
          <ul className={style.nav}>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/allProjects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contant</Link>
            </li>
            <li>
              <a href="https://t.me/mylife_ph">
                <abbr title="telegram">
                  <Telegram />
                </abbr>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/netaliphotographer/">
                <abbr title="instagram">
                  <Instagram />
                </abbr>
              </a>
            </li>
            <li className={style.burger}>
              <motion.button
                onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
                whileTap={{ scale: "0.98" }}
                data-isopen={mobileMenuIsOpen}
              >
                <span></span>
                <span></span>
              </motion.button>
            </li>
          </ul>
        </div>
        <motion.ul
          className={style.mobile_nav}
          initial={{ height: "0" }}
          animate={mobileMenuIsOpen ? { height: "110px" } : { height: "0" }}
          exit={{ height: "0" }}
          transition={{ duration: 0.5 }}
        >
          <li>
            <Link to="/about" onClick={() => setMobileMenuIsOpen(false)}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="/allProjects" onClick={() => setMobileMenuIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMobileMenuIsOpen(false)}>
              Contant
            </Link>
          </li>
          <li>
            <a
              href="https://t.me/mylife_ph"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              <abbr title="telegram">
                <Telegram />
              </abbr>
            </a>
            <a
              href="https://www.instagram.com/netaliphotographer/"
              onClick={() => setMobileMenuIsOpen(false)}
            >
              <abbr title="instagram">
                <Instagram />
              </abbr>
            </a>
          </li>
        </motion.ul>
      </div>
    </Fragment>
  );
};
