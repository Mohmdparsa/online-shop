import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";
import SecondNavbarContent from "./SecondNavbarContent";

const SecondNavbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 2,
  });
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        timeout={1000}
        style={{
          top: "1px",
          visibility: trigger ? "hidden" : "visible",
          transition: "visibility 0.5s ease-in-out",
          zIndex: 1000,
          backgroundColor:"#999999",
        }}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
          height: "50px",
          borderRadius:"0 0 10px 10px"
        }}
      >
        <Toolbar>
          <SecondNavbarContent/>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default SecondNavbar;
