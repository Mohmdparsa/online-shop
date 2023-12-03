import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("first name is required"),
  secondName: Yup.string().required("second name is required"),
  phone: Yup.number().required("phone number is required"),
  email: Yup.string()
    .email("email address is not valid")
    .required("email is required").nullable(),
  password: Yup.string().required("password is required"),
  reTypepassword: Yup.string(),
});