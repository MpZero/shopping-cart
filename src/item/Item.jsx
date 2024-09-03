import "../colors.module.css";

import styles from "./Item.module.css";

// eslint-disable-next-line react/prop-types
const Item = ({ name, price, image }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={name} className={styles.img} />
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.buttons}>+</button>
        <p>#</p>
        <button className={styles.buttons}>-</button>
      </div>
      <p className={styles.itemPrice}>$ {price}</p>
    </div>
  );
};

export default Item;
