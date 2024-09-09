import styles from "./Card.module.css";
import "../colors.module.css";
import { useCart } from "../cart/CartContext";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const Card = ({ id, imageURL, title, price }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const increaseQuantity = () =>
    setQuantity((prevQuantity) => prevQuantity + 1);
  const decreaseQuantity = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const handleAddToCart = () => {
    addToCart({ id, title, price, image: imageURL, quantity });
  };

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
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className={styles.buttons} onClick={increaseQuantity}>
          +
        </button>
        <p>{quantity}</p>
        <button className={styles.buttons} onClick={decreaseQuantity}>
          -
        </button>
      </div>
    </div>
  );
};

export default Card;
