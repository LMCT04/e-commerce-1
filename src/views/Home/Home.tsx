import Screen from "../../components/Screen/Screen";
import Slider from "../../components/Slider/Slider";
import styles from "./Home.module.css";

const Home = () => {
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
          <p>offers ...</p>
        </div>
      </div>
    </Screen>
  );
};

export default Home;
