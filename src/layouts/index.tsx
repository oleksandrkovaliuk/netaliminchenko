import React, { Fragment } from "react";
import { PageProps } from "gatsby";
import "./main.scss";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { BackToTopBtn } from "../components/backToTop";
const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <Fragment>
      <BackToTopBtn />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
