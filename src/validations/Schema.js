import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string("نام خود را وارد کنید").required("نام الزامی است"),
  lastName: yup
    .string("نام خانوادگی خود را وارد کنید")
    .required("نام خانوادگی الزامی است"),
  email: yup
    .string("ایمیل خود را وارد کنید")
    .email("ایمیل معتبر وارد کنید")
    .required("ایمیل الزامی است"),
  password: yup
    .string("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل هشت کاراکتر باشد")
    .required("رمز عبور الزامی است"),
  repeatPassword: yup
    .string("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل هشت کاراکتر باشد")
    .required("رمز عبور الزامی است"),
});

export default validationSchema;
