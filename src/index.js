import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Login from "./headerComponent/Login";
import SignIn from "./headerComponent/SignIn"
import GamingAccessories from "./mainComponent/GILinkComponent/GamingAccessories"
import Electronics from "./mainComponent/GILinkComponent/Electronics"
import HomeAndKitchen from "./mainComponent/GILinkComponent/Home&Kitchen"
import HealthAndPersonalCare from "./mainComponent/GILinkComponent/Health&PersonalCare"
import ForYourFitnessNeeds from "./mainComponent/GILinkComponent/ForYourFitnessNeeds"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/GamingAccessories" element={<GamingAccessories/>}/>
      <Route path="/Electronics" element={<Electronics/>}/>
      <Route path="/HomeAndKitchen" element={<HomeAndKitchen/>}/>
      <Route path="/HealthAndPersonalCare" element={<HealthAndPersonalCare/>}/>
      <Route  path="/ForYourFitnessNeeds" element={<ForYourFitnessNeeds/>}/>


     
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
