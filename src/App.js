import FirstNavbar from "./headerComponent/firstNavbar";
import SecondNavbar from "./headerComponent/SecondNavbar";
import SwiperSlider from "./mainComponent/SwiperSlider";
import GroupingItems from "./mainComponent/GroupingItems";
import { Helmet, HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>Online Shop</title>
        </Helmet>
        <FirstNavbar />
        <br />
        <SecondNavbar />
        <br />
        <SwiperSlider />
        <br />
        <GroupingItems />
      </HelmetProvider>
    </div>
  );
}

export default App;
