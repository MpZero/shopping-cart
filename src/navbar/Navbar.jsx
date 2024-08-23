import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Navbar!</h1>
      <Link to="/homepage">Homepage Link</Link>
      <Link to="/cart">Cart Link</Link>
      <Outlet />
    </>
  );
};

export default Navbar;
