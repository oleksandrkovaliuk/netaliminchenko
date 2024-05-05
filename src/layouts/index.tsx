import React, { Fragment } from "react";
import { PageProps } from "gatsby";
import "./main.scss";
import { Header } from "../components/header";
const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <footer>bye</footer>
    </Fragment>
  );
};
export default Layout;
