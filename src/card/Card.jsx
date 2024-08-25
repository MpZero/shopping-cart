import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <h4>ITEM</h4>
      <img src="https://placehold.co/300x300" alt="" />
      <div className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
};

export default Card;
