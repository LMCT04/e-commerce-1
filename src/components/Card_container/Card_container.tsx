import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import styles from "./Card_container.module.css";
import { useState } from "react";
import { productsDB } from "../../dataBaseTest.ts";

const CardContainer = () => {
  const productsArray = productsDB;
  const showProduct = 2;
  const [page, setPage] = useState(1);
  const paginate = (pageNumber: number) => {
    setPage(pageNumber);
  };
  const lastOnPage = page * showProduct;
  const firstOnPage = lastOnPage - showProduct;
  const currentProducts = productsArray.slice(firstOnPage, lastOnPage);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {currentProducts?.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <Paginated
        data={productsArray.length}
        show={showProduct}
        paginate={paginate}
        page={page}
      />
    </div>
  );
};

export default CardContainer;
