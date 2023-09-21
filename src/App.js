
import FirstNavbar from "./headerComponent/firstNavbar"
import SecondNavbar from "./headerComponent/SecondNavbar";
import SwiperSlider from "./mainComponent/SwiperSlider";
import GroupingItems from "./mainComponent/GroupingItems";

function App() {
  return (
    <div className="App">
       <FirstNavbar />
       <br/>
       <SecondNavbar/>
       <br/>
       <SwiperSlider/>
       <br/>
       <GroupingItems/>
      
    </div>
  );
}

export default App;
