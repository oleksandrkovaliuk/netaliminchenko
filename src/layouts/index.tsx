import React, { Fragment } from "react";
import { PageProps } from "gatsby";
import "./main.scss";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { BackToTopBtn } from "../components/backToTop";
import { Toaster } from "sonner";
import { motion } from "framer-motion";
const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <Fragment>
      <Toaster
        position={"bottom-right"}
        toastOptions={{
          className: "toaster",
        }}
      />
      <BackToTopBtn />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
