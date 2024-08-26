import "../colors.module.css";

import styles from "./Item.module.css";

// eslint-disable-next-line react/prop-types
const Item = ({ name, price, image }) => {
  return (
    <div className={styles.item}>
      <img
        src="https://placehold.co/100x100"
        alt={name}
        className={styles.image}
      />
      <p>PLACEHOLDER</p>
      <div className={styles.details}>
        <p>$ 300</p>
      </div>
    </div>
  );
};

export default Item;
