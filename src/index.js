import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Login from "./headerComponent/Login";
import SignIn from "./headerComponent/SignIn"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
