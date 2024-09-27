import Screen from "../../components/Screen/Screen";
import CardContainer from "../../components/Card_container/Card_container";
import styles from "./Store_view.module.css";

const Store_View = () => {
  return (
    <Screen>
      <div className={styles["card_container"]}>
        <CardContainer />
      </div>
    </Screen>
  );
};

export default Store_View;
