import styles from "./Header.module.css";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type HeaderTypes = {
  children: ReactNode;
};
const Header = ({ children }: HeaderTypes) => {
  return <div className={styles.header}>{children}</div>;
};

const HeaderDumb = () => {
  return (
    <div className={styles["header_dumb"]}>
      <h2 className={styles["hd-h2"]}>Furniture Store</h2>
    </div>
  );
};

const HeaderSmart = () => {
  return (
    <div className={styles["header_smart"]}>
      <div className={styles["hs-container"]}>
        <h2 className={styles["hs-h2"]}>Furniture Store</h2>
      </div>
      <div className={styles["link_container"]}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? styles["link_active"] : styles["link"]
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            isActive ? styles["link_active"] : styles["link"]
          }
        >
          Store
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles["link_active"] : styles["link"]
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

Header.Dumb = HeaderDumb;
Header.Smart = HeaderSmart;

export default Header;
