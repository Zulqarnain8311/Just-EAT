import { createBrowserRouter } from "react-router-dom";

// components
import App from "../App";
import Home from "../pages/Home";
import AboutUs from "../pages/aboutus";
import ContactUs from "../pages/contactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about", // About page ka route
        element: <AboutUs />,
      },
      {
        path: "contact", // About page ka route
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
