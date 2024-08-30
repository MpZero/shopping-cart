import styles from "./Card.module.css";
import "../colors.module.css";

// eslint-disable-next-line react/prop-types
const Card = ({ imageURL, title, price }) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.h4}>{title}</h4>
      <div className={styles.imgWrapper}>
        {imageURL ? (
          <img className={styles.img} src={imageURL} alt="Product" />
        ) : (
          <img
            className={styles.img}
            src="https://placehold.com/150x150"
            alt="Image not available"
          />
        )}
      </div>
      <p className={styles.p}>$ {price}</p>
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
