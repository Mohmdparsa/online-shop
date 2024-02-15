import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import SignIn from "../Component/header/headerTabs/SignIn"
import Login from "../Component/header/headerTabs/Login";


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
          path:"/SignIn",
          element:<SignIn/>
        },
        {
          path:"/Login",
          element:<Login/>
        }

      ],
    },
  ]);

  export default router