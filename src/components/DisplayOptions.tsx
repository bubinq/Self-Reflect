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
    <div className={styles.options}>
      <div className={styles.review}>
        <button
          onClick={showPrevModalOrReview}
          className={styles.btnRev}
          ref={btnRef}
        >
          {modalIdx === 1 ? <Link to={"/review"}>Review</Link> : "Prev"}
        </button>
      </div>
      <div className={styles.review}>
        <button
          onClick={showNextModal}
          className={!hasNext ? styles.disabled : styles.btnNext}
          disabled={!hasNext}
          style={{ padding: isOpening ? "8px 4px" : "8px 18px" }}
        >
          {isOpening ? "Reflect" : "Next"}
        </button>
      </div>
    </div>
  );
};
