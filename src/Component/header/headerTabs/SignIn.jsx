import { Container, TextField, CardContent, Grid, Button } from "@mui/material";
import { useFormik } from "formik";
import validationSchema from "../../../validations/Schema";
const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Container>
        <form>
          <CardContent>
            <Grid
              container
              sx={{
                border: "1px  solid  gray",
                borderRadius: "15px",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                direction: "ltr",
                bgcolor: "#d4d0c5",
              }}
              xs={12}
              sm={12}
              md={8}
              lg={8}
            >
              <Grid item>
                {" "}
                <h2>ثبت نام</h2>
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  fullWidth
                  size="small"
                  placeholder="نام"
                  name="name"
                  variant="outlined"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  sx={{
                    width: { xs: "90%", sm: "77%" },
                    bgcolor: "whitesmoke",
                    color: "black",
                  }}
                  InputLabelProps={{ dir: "rtl" }}
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  fullWidth
                  size="small"
                  placeholder="نام خانوادگی"
                  name="lastName"
                  variant="outlined"
                  id="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  sx={{
                    width: { xs: "90%", sm: "77%" },
                    bgcolor: "whitesmoke",
                    color: "black",
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  fullWidth
                  size="small"
                  placeholder="آدرس ایمیل"
                  name="email"
                  variant="outlined"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{
                    width: { xs: "90%", sm: "77%" },
                    bgcolor: "whitesmoke",
                    color: "black",
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  fullWidth
                  size="small"
                  placeholder="رمز عبور"
                  name="password"
                  variant="outlined"
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  sx={{
                    width: { xs: "90%", sm: "77%" },
                    bgcolor: "whitesmoke",
                    color: "black",
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  margin="normal"
                  fullWidth
                  size="small"
                  placeholder=" تکرار رمز عبور "
                  name="repeatPassword"
                  variant="outlined"
                  id="repeatPassword"
                  value={formik.values.repeatPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.repeatPassword &&
                    Boolean(formik.errors.repeatPassword)
                  }
                  helperText={
                    formik.touched.repeatPassword &&
                    formik.errors.repeatPassword
                  }
                  sx={{
                    width: { xs: "90%", sm: "77%" },
                    bgcolor: "whitesmoke",
                    color: "black",
                  }}
                />
              </Grid>
              <Grid>
                <Button variant="contained" sx={{ marginY: "30px" }}>
                  عضویت
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Container>
    </>
  );
};

export default SignIn;
