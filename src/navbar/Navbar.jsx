import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Navbar!</h1>
      <Link to="/homepage">Home</Link>
      <Link to="/cart">Cart</Link>
      <Outlet />
    </>
  );
};

export default Navbar;
