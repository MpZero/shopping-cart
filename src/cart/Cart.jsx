import "../colors.module.css";
import styles from "./Cart.module.css";
import Item from "../item/Item";
const Cart = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cartWrapper}>
        <div className={styles.itemWrapper}>
          <div className={styles.heading}>
            <h2>Shopping Cart</h2>
            <p># items</p>
          </div>
          <Item />
          <Item />
          <Item />
        </div>
        <div className={styles.summaryWrapper}>
          <h2>Summary</h2>
          <div className={styles.total}>
            <p>TOTAL ITEMS: 3</p>
            <p>$ 900</p>
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
