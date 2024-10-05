import styles from "./Paginated.module.css";
import { useEffect } from "react";

type propPaginated = {
  show: number;
  page: number;
  data: number;
  paginate: (page: number) => void;
};

const Paginated = ({ data, show, paginate, page }: propPaginated) => {
  useEffect(() => {
    if (page !== 1) {
      paginate(1);
    }
  }, [data]);

  const total = Math.ceil(data / show);
  const pageNum = [];

  for (let i = 1; i <= total; i++) {
    pageNum.push(i);
  }

  return (
    <div className={styles.container}>
      {total > 1 && (
        <>
          <button
            disabled={page === 1 ? true : false}
            onClick={page > 1 ? () => paginate(page - 1) : undefined}
          >
            PREV
          </button>
          {pageNum.length > 0 &&
            pageNum.map((num) => (
              <button
                key={num}
                onClick={() => paginate(num)}
                disabled={page === num ? true : false}
              >
                {num}
              </button>
            ))}
          <button
            disabled={page === total ? true : false}
            onClick={page < total ? () => paginate(page + 1) : undefined}
          >
            NEXT
          </button>
        </>
      )}
    </div>
  );
};

export default Paginated;
