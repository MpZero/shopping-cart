import styles from "./Homepage.module.css";
import "../colors.module.css";

import Card from "../card/Card.jsx";

const Homepage = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.title}>
          <h1>Stylism</h1>
        </div>
        <div className={styles.navBar}>
          <h3>New collections</h3>
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>Kids</h3>
          <h3>Accesories</h3>
          <div className={styles.searchWrapper}>
            <input type="text" placeholder="Search..." />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>magnify</title>
              <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </div>
        </div>
      </header>
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  );
};

export default Homepage;
