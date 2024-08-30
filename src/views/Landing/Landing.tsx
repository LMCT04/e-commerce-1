import Screen from "../../components/Screen/Screen";
import { useState } from "react";
import SignIn from "../../components/SignIn/SignIn";
import Register from "../../components/Register/Register";
import styles from "./Landing.module.css";

const Landing = () => {
  const [option, setOption] = useState("sign_in");

  const renderComponent = () => {
    if (option === "sign_in") return <SignIn />;
    else return <Register />;
  };

  const toggle = () => {
    setOption(option === "sign_in" ? "register" : "sign_in");
  };

  const textButton = option === "sign_in" ? "Register" : "Sign In";

  return (
    <Screen>
      <div className={styles.container}>
        {renderComponent()}
        <div className={styles.boxOption}>
          <p>or</p>
          <button className={styles.buttonOption} onClick={toggle}>
            {textButton}
          </button>
        </div>
      </div>
      <a href="/home">DEV BUTTON</a>
    </Screen>
  );
};

export default Landing;
