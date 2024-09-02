import styles from "./Card.module.css";

type CardProps = {
  data: {
    name: string;
    price: number;
  };
};

const Card = ({ data }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2>{data.name}</h2>
      <p>{data.price}</p>
    </div>
  );
};

export default Card;
