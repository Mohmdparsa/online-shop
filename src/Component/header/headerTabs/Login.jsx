import { Card, CardContent, Grid, TextField, Button } from "@mui/material";
import {Link} from "react-router-dom"
import { useFormik } from "formik";
import validationSchema from "../../../validations/Schema";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "80vh" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Card
            sx={{ height: "70vh", display: "flex", flexDirection: "column" }}
            style={{ backgroundColor: "gray" }}
          >
            <h1 style={{ textAlign: "center", color: "white" }}>فرم ورود</h1>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="standard-basic"
                label="ایمیل"
                name="email"
                variant="standard"
                sx={{ marginTop: "10px" }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                InputLabelProps={{ dir: "rtl" }}
              />
              <TextField
                id="standard-basic"
                label="رمز عبور"
                name="password"
                variant="standard"
                sx={{ marginTop: "20px" }}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                InputLabelProps={{ dir: "rtl" }}
              />
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  marginTop: "50px",
                  height: "40px",
                  fontSize: "20px",
                }}
              >
                ورود
              </Button>
              <div display="flex" style={{marginTop:"35px"}}>
                <span style={{ fontSize: "17px" }}>عضو نیستی؟</span>
                <Link to="../SignIn" style={{textDecoration:"none" , marginRight:"10px"}}>ثبت نام</Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
