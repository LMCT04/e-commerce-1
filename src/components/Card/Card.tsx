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
    <div className={styles.card}>
      <Link to={`/store/${data.id}`}>
        <h2>{data.name}</h2>
        <p>{data.price}</p>
      </Link>
    </div>
  );
};

export default Card;
