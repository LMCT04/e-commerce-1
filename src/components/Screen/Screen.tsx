import { ReactNode } from "react";
import styles from "./Screen.module.css";

type ScreenProps = {
  children: ReactNode;
};

const Screen = ({ children }: ScreenProps) => {
  return <div className={styles.screen}>{children}</div>;
};

export default Screen;
