import { useContext, useRef } from "react";
import { ModalContext } from "../contexts/ModalContext";
import styles from "./DisplayOptions.module.css";

export const DisplayOptions = () => {
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
    <div className={styles.options}>
      <div className={styles.review}>
        <button
          onClick={showPrevModalOrReview}
          className={styles.btnRev}
          ref={btnRef}
        >
          {modalIdx === 1 ? "Review" : "Prev"}
        </button>
      </div>
      <div className={styles.review}>
        <button
          onClick={showNextModal}
          className={!hasNext ? styles.disabled : styles.btnNext}
          disabled={!hasNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
