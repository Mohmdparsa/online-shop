import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./headerComponent/Login";
import SignIn from "./headerComponent/SignIn";
import {
  GamingAccessories,
  Electronics,
  HomeAndKitchen,
  HealthAndPersonalCare,
  ForYourFitnessNeeds,
  FindYourIdealTV,
  ShopLaptopsAndTablets,
  Smartwatches,
  Toys ,
} from "./mainComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/GamingAccessories" element={<GamingAccessories />}>
          
        </Route>
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/HomeAndKitchen" element={<HomeAndKitchen />} />
        <Route
          path="/HealthAndPersonalCare"
          element={<HealthAndPersonalCare />}
        />
        <Route path="/ForYourFitnessNeeds" element={<ForYourFitnessNeeds />} />
        <Route path="/FindYourIdealTV" element={<FindYourIdealTV />} />
        <Route
          path="/ShopLaptopsAndTablets"
          element={<ShopLaptopsAndTablets />}
        />
        <Route path="/Smartwatches" element={<Smartwatches />} />
        <Route path="/Toys" element={<Toys />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
