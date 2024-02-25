import * as React from "react";
import PropTypes from "prop-types";

import { Box, Typography, Tab, Tabs } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: {xs:"100%" , sm:"100%" , md:"70%" , lg:"80%"} , mt:"73px" , }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" , display:"flex" , justifyContent:"center" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ mt: "20px" , }}
          contered
          indicatorColor="secondary"
        >
          <Tab label="سبد خرید" sx={{fontSize:"22px"}} {...a11yProps(0)}  style={{color: value === 0 ? "black" : "gray"}}/>
          <Tab label="خرید بعدی" sx={{fontSize:"22px"}} {...a11yProps(1)} style={{color: value === 1 ? "black" : "gray"}}/>
        </Tabs>
      </Box>
      <Box sx={{border:"1px solid gray" , mt:"20px" , borderRadius:"10px" , height:"50vh"}}>
          <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      </Box>
    
    </Box>
  );
}
