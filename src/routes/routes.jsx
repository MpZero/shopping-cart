import Homepage from "../homepage/Homepage.jsx";
import Cart from "../cart/Cart.jsx";
import Navbar from "../navbar/Navbar.jsx";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Navigate to="/homepage" replace /> },
      {
        path: "/homepage",
        element: <Homepage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
