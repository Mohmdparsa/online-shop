import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";

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
      ],
    },
  ]);

  export default router