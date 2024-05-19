import React, { Fragment, useMemo, useState } from "react";
import { PageProps } from "gatsby";
import "./main.scss";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { BackToTopBtn } from "../components/backToTop";
import { Toaster } from "sonner";
const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <Fragment>
      <Toaster
        position={window?.innerWidth < 768 ? "top-center" : "bottom-right"}
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
