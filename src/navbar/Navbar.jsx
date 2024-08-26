import styles from "./Navbar.module.css";
import "../colors.module.css";

import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <img src="https://placehold.co/100x30" alt="logo" />
        <Link className={styles.link} to="/homepage">
          Home
        </Link>
        <Link className={styles.link} to="/cart">
          Cart
        </Link>
      </div>
      <div className={styles.outletWrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
