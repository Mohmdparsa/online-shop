import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Card,
  IconButton,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";







const FirstHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ zIndex: 1100 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            فروشگاه من
          </Typography>
         { <SearchInput/>}
          <Grid contaner sx={{display:{xs:"none" , sm:"block"}}}>
            {" "}
            <Grid item sx={{display:"flex"}}>
              <Card
                sx={{
                  backgroundColor: "primary.main",
                  border: "1px solid black",
                  marginLeft: "20px",
                  width: "160px",
                  display: "flex",
                }}
              >
                <Button variant="text" sx={{ color: "blue", fontSize: "15px" }}>
                  <Link to="Login" style={{ textDecoration: "none" }}>
                    ورود
                  </Link>
                </Button>{" "}
                <span style={{ marginTop: "10px" }}>|</span>
                <Button
                  variant="text"
                  sx={{ color: "blue", fontSize: "15px", mt: "3px" }}
                >
                  <Link to="SignIn" style={{ textDecoration: "none" }}>
                    ثبت نام
                  </Link>
                </Button>
                <LoginRoundedIcon
                  sx={{ fontSize: "17px", marginTop: "13px" }}
                />
              </Card>
              <span style={{ marginRight: "20px" , marginTop:"12px" }}>|</span>
              <Link to="ShoppingCart">
                <IconButton
                  color="secondary.main"
                  sx={{ marginLeft: "20px" , marginTop:"5px" }}
                  aria-label="add to shopping cart"
                  size="small"
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default FirstHeader;
