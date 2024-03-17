import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import SignIn from "../Component/header/headerTabs/SignIn";
import Login from "../Component/header/headerTabs/Login";
import ShoppingCart from "../Component/header/headerTabs/ShoppingCart";
import DigitalProducts from "../pages/DigitalProducts/DigitalProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h3>چیزی پیدا نکردیم متاسفانه...</h3>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/ShoppingCart",
        element: <ShoppingCart />,
      },
      {
        path: "Card1",
        element: <DigitalProducts />,
      },
    ],
  },
]);

export default router;
