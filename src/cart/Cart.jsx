import "../colors.module.css";
import styles from "./Cart.module.css";
import Item from "../item/Item.jsx";
import { useCart } from "./CartContext.jsx";

const Cart = () => {
  const { cartItems } = useCart();
  const priceTotal = cartItems.reduce(
    (total, item) => total + (item.price || 0),
    0
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.cartWrapper}>
        <div className={styles.itemWrapper}>
          <div className={styles.heading}>
            <h2>Shopping Cart</h2>
            <p>{cartItems.length} items</p>
          </div>
          {cartItems.map((item) => (
            <Item
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
        <div className={styles.summaryWrapper}>
          <h2>Summary</h2>
          <div className={styles.total}>
            <p>TOTAL ITEMS: {cartItems.length}</p>
            <p>${Math.floor(priceTotal)}</p>
          </div>
          <div className={styles.shipping}>
            <label htmlFor="shipping">SHIPPING</label>
            <select name="shipping" id="shipping">
              <option value=""> SHIPPING OPTIONS</option>
              <option value="">FREE</option>
            </select>
          </div>
          <div className={styles.discount}>
            <label htmlFor="discount">DISCOUNT CODE</label>
            <input
              type="text"
              name="discount"
              id="discount"
              placeholder="Enter your code"
            />
          </div>
          <div className={styles.total}>
            <p>TOTAL PRICE</p>
            <p>${Math.floor(priceTotal)}</p>
            <button className={styles.checkout}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
