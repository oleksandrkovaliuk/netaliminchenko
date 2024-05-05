import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Home } from "../sections/HomePage";

const HomePage: React.FC<PageProps> = () => {
  return <Home />;
};

export default HomePage;

export const Head: HeadFC = () => <title>Home</title>;
