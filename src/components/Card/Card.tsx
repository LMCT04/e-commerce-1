import { Link } from "react-router-dom";
import styles from "./Card.module.css";

type CardProps = {
  data: {
    id: number;
    name: string;
    price: number;
  };
};

const Card = ({ data }: CardProps) => {
  return (
    <Link to={`/store/${data.id}`}>
      <div className={styles.card}>
        <div className={styles["container-img"]}>IMAGE</div>
        <h2>{data.name}</h2>
        <p>{data.price}</p>
      </div>
    </Link>
  );
};

export default Card;
