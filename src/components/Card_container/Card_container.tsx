import Card from "../Card/Card";
import styles from "./Card_container.module.css";

const Card_container = () => {
  const productsArray = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
    { id: 4, name: "Product 4", price: 400 },
    { id: 5, name: "Product 5", price: 500 },
    { id: 6, name: "Product 6", price: 600 },
  ];

  return (
    <div className={styles.container}>
      {productsArray?.map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Card_container;
