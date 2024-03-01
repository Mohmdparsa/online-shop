import * as React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";

const BottomAppBar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          display: { xs: "block", sm: "none" },
          backgroundColor: "gray",
          flexWrap:"wrap",
          borderRadius:"10px  10px  0  0"
          
        }}
      >
        <Toolbar>
          <IconButton
          edge="start"
            color="inherit"
            style={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <Link to="/"> 
            <HouseIcon/>
            </Link>
          </IconButton>
          <IconButton
            color="inherit"
            style={{ "&:hover": { backgroundColor: "transparent"} }}
            sx={{flexGrow:1 , textAlign:"center"}}
          >
            <PersonIcon/>
          </IconButton>
          <IconButton
          edge="end"
            color="inherit"
            style={{ "&:hover": { backgroundColor: "transparent" } }}
          >
            <Link to="/ShoppingCart">
              <ShoppingCartIcon/>
            </Link>
          </IconButton>

        </Toolbar>
      </AppBar>
    </>
  );
};

export default BottomAppBar;
