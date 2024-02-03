import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HelmetProvider, Helmet } from "react-helmet-async";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Button, Typography } from "@mui/material";
import FirstNavbar from "./Component/FirstNavbar"
import SecondNavbar from "./Component/SecondNavbar";
import SwipeableImage from "./Component/SwipeableImage";
import ProductsPartition from "./Component/ProductsPartition";
const theme = createTheme({
  direction: "rtl",
});
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>آنلاین شاپ شخصی</title>
          </Helmet>
          <div className="App">
            <FirstNavbar/>
            <div style={{paddingTop:"55px"}}></div>
            <SecondNavbar/>
            <SwipeableImage/>
            <ProductsPartition/>
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
