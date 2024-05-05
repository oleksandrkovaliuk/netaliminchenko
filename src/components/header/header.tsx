import React, { useEffect, useState } from "react";
import * as style from "./header.module.scss";
import { Telegram } from "../../icons/telegram";
import { Instagram } from "../../icons/instagram";
import { Link } from "gatsby";

export const Header = () => {
  const [appearHeader, setAppearHeader] = useState(true);
  const [headerOnTop, setHeaderOnTop] = useState(true);
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
    <div
      style={{
        top: headerOnTop ? "0px" : appearHeader ? "10px" : "-100px",
        borderRadius: !headerOnTop ? "8px" : "0px",
        maxWidth: headerOnTop ? "" : "600px",
        margin: "auto",
      }}
      className={style.header_wrap}
    >
      <div className={style.logo}>nl</div>
      <ul className={style.nav}>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contant me</Link>
        </li>
        <li>
          <Link to="https://t.me/mylife_ph">
            <Telegram />
          </Link>
        </li>
        <li>
          <Link to="https://www.instagram.com/netaliminchenko/">
            <Instagram />
          </Link>
        </li>
      </ul>
    </div>
  );
};
