import React, { useEffect, useState } from "react";
import * as style from "./header.module.scss";
import { Telegram } from "../../icons/telegram";
import { Instagram } from "../../icons/instagram";
import { Link } from "gatsby";

export const Header = () => {
  const [appearHeader, setAppearHeader] = useState(true);

  useEffect(() => {
    let prevScroll = window.scrollY;
    const appearHeader = () => {
      const currScroll = window.scrollY;
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
      style={appearHeader ? { top: "0px" } : { top: "-100px" }}
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
