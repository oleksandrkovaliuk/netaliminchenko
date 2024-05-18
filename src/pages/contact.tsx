import { HeadFC, PageProps } from "gatsby";
import React from "react";
import { ContactOrBookTemplate } from "../sections/contactOrBook";

const ContactOrBook: React.FC<PageProps> = () => {
  return <ContactOrBookTemplate />;
};
export default ContactOrBook;

export const Head: HeadFC = () => <title>Contact/Book page</title>;
