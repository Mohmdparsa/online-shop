import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("first name is required"),
  secondName: Yup.string().required("second name is required"),
  phone: Yup.number().required("phone number is required"),
  email: Yup.string()
    .email("email address is not valid").nullable(),
  password: Yup.string().required("password is required").min(6,"too short").max(12 , "too long"),
  reTypepassword:Yup.string().required("re-type-password is required").min(6,"too short").max(12 , "too long"),
});