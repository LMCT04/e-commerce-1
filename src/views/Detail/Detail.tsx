import { useParams } from "react-router-dom";
import style from "./Detail.module.css";
import Screen from "../../components/Screen/Screen";
import { productsDB } from "../../dataBaseTest.ts";

const Detail = () => {
  const { id } = useParams();
  const dataProductID = (id: number) => {
    const product = productsDB.find((product) => product.id === id);
    return product;
  };

  const data = id ? dataProductID(parseInt(id, 10)) : null;
  console.log(data);

  return (
    <Screen>
      <h2 className={style.h2}>DETAIL {id}</h2>
      <div>
        <img src="" alt="" />
      </div>
    </Screen>
  );
};

export default Detail;
