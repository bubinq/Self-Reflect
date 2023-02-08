import { useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { Link } from "react-router-dom";
import styles from "./DisplayOptions.module.css";

export const DisplayOptions = ({ isOpening }: { isOpening: boolean }) => {
  const { modalIdx, setModalIdx } = useContext(ModalContext);

  const btnRef = useRef<HTMLButtonElement>(null);
  let hasNext = modalIdx < 4;

  const showNextModal = () => {
    setModalIdx((a: number) => a + 1);
  };

  const showPrevModalOrReview = () => {
    if (btnRef.current) {
      btnRef.current.textContent === "Prev" &&
        setModalIdx((a: number) => a - 1);
    }
  };
  return (
    <div className={isOpening? styles.options : styles.nonOpeningOptions}>
      <div className={styles.review}>
        {isOpening ? (
          <button
            onClick={showPrevModalOrReview}
            className={styles.openingRev}
            ref={btnRef}
          >
            <Link to={"/review"}>Review</Link>
          </button>
        ) : (
          <button
            onClick={showPrevModalOrReview}
            className={styles.btnRev}
            ref={btnRef}
          >
            Prev
          </button>
        )}
      </div>
      <div className={styles.review}>
        {isOpening ? (
          <button
            onClick={showNextModal}
            className={styles.openingRefl}
            style={{ padding: "8px 4px" }}
          >
            Reflect
          </button>
        ) : (
          <button
            onClick={showNextModal}
            className={!hasNext ? styles.disabled : styles.btnNext}
            disabled={!hasNext}
            style={{ padding: "8px 8px" }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
