import React, { Fragment } from "react";
import { PageProps } from "gatsby";
const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <Fragment>
      <header>hello</header>
      {children}
      <footer>bye</footer>
    </Fragment>
  );
};
export default Layout;
