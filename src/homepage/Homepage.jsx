import styles from "./Homepage.module.css";
import "../colors.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../card/Card.jsx";
import { useCart } from "../cart/CartContext.jsx";

const Homepage = () => {
  const location = useLocation();
  const { data: passedData } = location.state || {};
  const [products, setProducts] = useState(passedData || null);
  const [loading, setLoading] = useState(!passedData);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    //If Navbar doesn't pass data, fetch it
    if (!passedData) {
      fetch("https://fakestoreapi.com/products?limit=8", { mode: "cors" })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setProducts(data);
          } else {
            throw new Error("Unexpected data format");
          }
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [passedData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.title}>
          <h1>Stylism</h1>
        </div>
        <div className={styles.navBar}>
          <h3>New collections</h3>
          <h3>Men</h3>
          <h3>Women</h3>
          <h3>Kids</h3>
          <h3>Accesories</h3>
          <div className={styles.searchWrapper}>
            <input type="text" placeholder="Search..." />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>magnify</title>
              <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
            </svg>
          </div>
        </div>
      </header>
      <main>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <Card
              id={product.id}
              key={product.id}
              imageURL={product.image}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              onAddToCart={() => addToCart(product)}
            />
          ))
        ) : (
          <p>No products available</p>
        )}
      </main>
    </div>
  );
};

export default Homepage;
