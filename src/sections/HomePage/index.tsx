import React, { Fragment } from "react";
import { FirstSection } from "./firstSection";
import { SecondSection } from "./secondSection";
import { ThirdSection } from "./thirdSection";
import { FourthSection } from "./fourthSection";

export const Home = () => {
  return (
    <Fragment>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Fragment>
  );
};
