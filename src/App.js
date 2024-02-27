import { HelmetProvider, Helmet } from "react-helmet-async";
import { FirstNavbar, SecondNavbar } from "./Component/header/Header";
import SwipeableImage from "./Component/mainContent/SwipeableImage";
import ProductsPartition from "./Component/mainContent/ProductsPartition";
import FooterContainer from "./Component/footer/FooterContainer";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>آنلاین شاپ شخصی</title>
      </Helmet>
      <div className="App">
        <FirstNavbar />
        <div style={{ paddingTop: "55px" }}></div>
        <SecondNavbar />
        <SwipeableImage />
        <ProductsPartition />
        <FooterContainer/>
      </div>
    </HelmetProvider>
  );
}

export default App;
