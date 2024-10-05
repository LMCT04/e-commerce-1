import Screen from "../../components/Screen/Screen";
import Slider from "../../components/Slider/Slider";
import { productsDB } from "../../dataBaseTest";
import styles from "./Home.module.css";

const Home = () => {
  const productsArray = productsDB;

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
