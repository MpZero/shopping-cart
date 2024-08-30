import styles from "./Navbar.module.css";
import "../colors.module.css";
import { Link, Outlet } from "react-router-dom";
import useFetchData from "./storeAPI";

const Navbar = () => {
  const { data, error, loading } = useFetchData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <img src="https://placehold.co/100x30" alt="logo" />
        <Link
          className={styles.link}
          to={{ pathname: "/homepage" }}
          state={{ data }}
        >
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
