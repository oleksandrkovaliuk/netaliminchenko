import { object, string } from "yup";

export const formSchema = object({
  details: string().min(5, "details: Please provide more details").required(),
  email: string().email("email: Email must be valid email").required(),
  name: string()
    .min(6, "name: Name must contain at least 6 characters")
    .required(),
});
