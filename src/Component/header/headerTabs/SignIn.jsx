import ValidationSchema from "../../../validations/Schema";
import { useFormik } from "formik";
import { TextField, Button, Grid } from "@mui/material";
import { updateFormData } from "../../../features/FormSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FormList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      const { fullname } = values;
      dispatch(updateFormData(fullname));
      navigate("/ShoppingCart");
    },
  });

  return (
    <>
      <Grid container style={{ marginTop: "60px", justifyContent: "center" }}>
        <Grid
          item
          style={{
            marginLeft: "30px",
            boxShadow: "0 0 5px 5px gray",
            borderRadius: "20px",
          }}
        >
          <h1 style={{ textAlign: "center" }}>فرم ثبت نام</h1>
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
              marginRight: "20px",
              marginBottom: "40px",
            }}
          >
            <div>
              <TextField
                type="text"
                label="نام و نام خانوادگی"
                name="fullname"
                style={{ width: "40vw", marginTop: "22px", color: "black" }}
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fullname && Boolean(formik.errors.fullname)
                }
                helperText={formik.touched.fullname && formik.errors.fullname}
              />
            </div>
            <div>
              <TextField
                type="text"
                label="ایمیل"
                name="email"
                style={{ width: "40vw", marginTop: "22px" }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div>
              <TextField
                type="password"
                label="رمزعبور"
                name="password"
                style={{ width: "40vw", marginTop: "22px" }}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
            <div>
              <TextField
                type="password"
                label="تکرار رمزعبور"
                name="repeatPassword"
                style={{ width: "40vw", marginTop: "22px" }}
                value={formik.values.repeatPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.repeatPassword &&
                  Boolean(formik.errors.repeatPassword)
                }
                helperText={
                  formik.touched.repeatPassword && formik.errors.repeatPassword
                }
              />
            </div>
            <div>
              <Button
                style={{ marginTop: "30px", marginRight: "40px" }}
                type="submit"
                variant="contained"
                color="primary"
              >
                {" "}
                ثبت نام
                {console.log("button clicked")}
              </Button>{" "}
              <Button
                style={{ marginTop: "30px", marginRight: "40px" }}
                type="submit"
                variant="contained"
                color="primary"
                // onClick={navigate("/")}
              >
                {" "}
                پشیمون شدم
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default FormList;
