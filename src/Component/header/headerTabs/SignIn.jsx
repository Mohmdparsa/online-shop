import {
  Container,
  TextField,
  CardContent,
  Grid,
  InputAdornment,
  Button,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const SignIn = () => {
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
                  name="email"
                  variant="outlined"
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
                  name="email"
                  variant="outlined"
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
                  name="email"
                  variant="outlined"
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
                  name="email"
                  variant="outlined"
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
