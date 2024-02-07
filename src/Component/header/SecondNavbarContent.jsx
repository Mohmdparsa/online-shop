import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const SecondNavbarContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = [
    {label:"item one", id:"1"},
    {label:"item one", id:"1"},
    {label:"item one", id:"1"},
    {label:"item one", id:"1"},
    {label:"item one", id:"1"},
    {label:"item one", id:"1"},
    {label:"item one", id:"1"},
    {label:"item one", id:"1"},
  ]

  return (
    <Tabs value={value} onChange={handleChange} centered sx={{ mb: "20px"}}>
      {tabs.map((t , index) =>(
         <Tab key={index} label={t.label} sx={{ fontSize: "10px", color:"black"}}/>

      ))}
    </Tabs>
  );
};

export default SecondNavbarContent;
