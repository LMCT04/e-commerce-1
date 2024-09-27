import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import Screen from "../../components/Screen/Screen";

const Detail = () => {
  const { id } = useParams();
  return (
    <Screen>
      <h2 className={style.h2}>DETAIL {id}</h2>
      <div></div>
    </Screen>
  );
};

export default Detail;
