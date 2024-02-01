import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HelmetProvider, Helmet } from "react-helmet-async";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Button } from "@mui/material";
import FirstNavbar from "./Component/FirstNavbar"
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
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
