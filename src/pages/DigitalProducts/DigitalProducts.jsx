
import PropTypes from "prop-types";
import { Box, Typography} from "@mui/material";

import DigitalProductsCardContent from "./DigitalProductsCardContent";
import DigitalProductsSidebar from "./DigitalProductsSidebar"

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



const DigitalProducts = () => {


  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
      }}
    >
   <DigitalProductsSidebar/>
      <DigitalProductsCardContent />
    </Box>
  );
};

export default DigitalProducts;
