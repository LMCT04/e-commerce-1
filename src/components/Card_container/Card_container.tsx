import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";
import styles from "./Card_container.module.css";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  off: {
    isActive: boolean;
    newPrice: number | null;
  };
};

const productsArray: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    off: { isActive: true, newPrice: 80 },
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    off: { isActive: false, newPrice: null },
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    off: { isActive: true, newPrice: 80 },
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    off: { isActive: false, newPrice: null },
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    off: { isActive: true, newPrice: 80 },
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    off: { isActive: false, newPrice: null },
  },
];

const CardContainer = () => {
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
