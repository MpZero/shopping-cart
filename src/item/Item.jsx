import "../colors.module.css";

import styles from "./Item.module.css";
import { useCart } from "../cart/CartContext";

// eslint-disable-next-line react/prop-types
/* eslint-disable */
const Item = ({
  id,
  name,
  price,
  image,
  quantity,
  onRemove,
  onIncQuantity,
  onDecQuantity,
}) => {
  const { increaseQuantity, decreaseQuantity } = useCart();
  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <img src={image} alt={name} className={styles.img} />
      </div>
      <p className={styles.name}>{name}</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.buttons} onClick={onIncQuantity}>
          +
        </button>
        <p>{quantity}</p>
        <button className={styles.buttons} onClick={onDecQuantity}>
          -
        </button>
      </div>
      <p className={styles.itemPrice}>$ {price}</p>
      <button className={styles.removeBtn} onClick={onRemove}>
        Remove from Cart
      </button>
    </div>
  );
};

export default Item;
