import { AppBar, Toolbar, useScrollTrigger } from "@mui/material";

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
        }}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
          },
          height: "43px",
        }}
      >
        <Toolbar></Toolbar>
      </AppBar>
    </>
  );
};

export default SecondNavbar;