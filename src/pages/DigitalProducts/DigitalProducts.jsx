import * as React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Tab, Tabs } from "@mui/material";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../features/DigitalProductsSlice";
import DigitalProductsCardContent from "./DigitalProductsCardContent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const DigitalProducts = () => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          backgroundColor: "secondary.main",
          width: {
            // xs: "150px",
            sm: "300px",
            md: "270px",
            lg: "240px",
            xl: "370px",
          },
          display:{
            xs:"none",
            sm:"block"
          }
        }}
      >
        <Tab
          label="موبایل"
          {...a11yProps(0)}
          onClick={() => handleCategoryClick("products")}
          sx={{
            backgroundColor: "gray",
            width: "170px",
            mx: "17px",
            borderRadius: "5px",
            my: "5px",
          }}
        />
        <Tab
          label="لپ تاپ"
          {...a11yProps(1)}
          onClick={() => handleCategoryClick("cars")}
          sx={{
            backgroundColor: "gray",
            width: "170px",
            mx: "17px",
            borderRadius: "5px",
            my: "5px",
          }}
        />
        <Tab
          label="ساعت هوشمند"
          {...a11yProps(2)}
          onClick={() => handleCategoryClick("foods")}
          sx={{
            backgroundColor: "gray",
            width: "170px",
            mx: "17px",
            borderRadius: "5px",
            my: "5px",
          }}
        />
        <Tab
          label="کیبورد"
          {...a11yProps(3)}
          sx={{
            backgroundColor: "gray",
            width: "170px",
            mx: "17px",
            borderRadius: "5px",
            my: "5px",
          }}
        />
        {/* <Tab
          label=""
          {...a11yProps(4)}
          sx={{
            backgroundColor: "gray",
            width: "170px",
            mx: "17px",
            borderRadius: "5px",
            my: "5px",
          }}
        />
        <Tab
          label="Item Six"
          {...a11yProps(5)}
          sx={{
            backgroundColor: "gray",
            width: "170px",
            mx: "17px",
            borderRadius: "5px",
            my: "5px",
          }}
        />
        <Tab
          label="Item Seven"
          {...a11yProps(6)}
          sx={{
            backgroundColor: "gray",
            width: "170px",
            mx: "17px",
            borderRadius: "5px",
            my: "5px",
          }}
        /> */}
      </Tabs>

      <DigitalProductsCardContent />
    </Box>
  );
};

export default DigitalProducts;
