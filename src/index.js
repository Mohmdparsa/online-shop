import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider} from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import theme from "./layouts/Theme";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import router from "./routes/Route";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>
);
