import styles from "./Header.module.css";
import { ReactNode } from "react";

type HeaderTypes = {
  children: ReactNode;
};
const Header = ({ children }: HeaderTypes) => {
  return <div className={styles.header}>{children}</div>;
};

const HeaderDumb = () => {
  return (
    <div>
      <h2>Header Dumb Web</h2>
    </div>
  );
};

const HeaderSmart = () => {
  return (
    <div>
      <h2>Header Smart Web</h2>
    </div>
  );
};

Header.Dumb = HeaderDumb;
Header.Smart = HeaderSmart;

export default Header;
