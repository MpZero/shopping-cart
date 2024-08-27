import "../colors.module.css";

import styles from "./Item.module.css";

// const Item = ({ name, price, image }) => {
const Item = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="https://placehold.co/100x100"
        alt={name}
        className={styles.image}
      />
      <p>PLACEHOLDER</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.buttons}>+</button>
        <p>#</p>
        <button className={styles.buttons}>-</button>
        <p className={styles.itemPrice}>$ 300</p>
      </div>
    </div>
  );
};

export default Item;
