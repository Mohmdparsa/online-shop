import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const SecondNavbarContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} centered sx={{ mb: "20px" }}>
      <Tab label="Item One" sx={{ fontSize: "10px" }} />
      <Tab label="Item Two" sx={{ fontSize: "10px" }} />
      <Tab label="Item Three" sx={{ fontSize: "10px" }} />
      <Tab label="Item four" sx={{ fontSize: "10px" }} />
      <Tab label="Item five" sx={{ fontSize: "10px" }} />
      <Tab label="Item six" sx={{ fontSize: "10px" }} />
    </Tabs>
  );
};

export default SecondNavbarContent;
