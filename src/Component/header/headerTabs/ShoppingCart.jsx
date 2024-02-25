import { useSelector } from "react-redux";
import { Typography, Grid } from "@mui/material";
import BasicTabs from "./ShopingCartContent";
const ShoppingCart = () => {
  const Name = useSelector((state) => state.formData.fullname);
  return (
    <>
      <Grid container>
        <Typography variant="h4">
          {" "}
          سلام <span style={{ color: "tomato" }}>{Name} </span>عزیز{" "}
        </Typography>
        <BasicTabs />
      </Grid>
    </>
  );
};

export default ShoppingCart;
