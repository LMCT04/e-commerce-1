import Screen from "../../components/Screen/Screen";
import Slider from "../../components/Slider/Slider";
import styles from "./Home.module.css";

const Home = () => {
  const productsArray = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      off: { isActive: true, newPrice: 80 },
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      off: { isActive: false, newPrice: null },
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      off: { isActive: true, newPrice: 80 },
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      off: { isActive: false, newPrice: null },
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      off: { isActive: true, newPrice: 80 },
    },
    {
      id: 6,
      name: "Product 6",
      price: 600,
      off: { isActive: false, newPrice: null },
    },
  ];

  const activeOffers = productsArray?.filter((product) => product.off.isActive);

  return (
    <Screen>
      <div className={styles["slider_container"]}>
        <Slider />
      </div>
      <div className={styles["off_container"]}>
        <div className={styles["off_title"]}>
          <h2>Daily Offers</h2>
        </div>
        <hr />
        <div className={styles["off_content"]}>
          {activeOffers.map((product) => {
            return (
              <div key={product.id} className={styles["off_card"]}>
                <h3>{product.name}</h3>
                <p>{product.off.newPrice}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Screen>
  );
};

export default Home;
