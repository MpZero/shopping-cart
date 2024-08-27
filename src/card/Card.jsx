import styles from "./Card.module.css";
import "../colors.module.css";

const Card = () => {
  return (
    // <div className={styles.wrapper}>
    <div className={styles.wrapper}>
      <h4>ITEM</h4>
      <img src="https://placehold.co/300x300" alt="" />
      <p>$ 300</p>
      Lorem ipsum dolor sit amet
      <div className={styles.buttonWrapper}>
        <button className={styles.addToCartBtn}>Add to Cart</button>
        <button className={styles.buttons}>+</button>
        <p>#</p>
        <button className={styles.buttons}>-</button>
      </div>
    </div>
  );
};

export default Card;
