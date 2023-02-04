import styles from "./Heading.module.css";
import { useSelector, useDispatch } from "react-redux";
import { nextMonth, prevMonth } from "../../redux/monthInput";
import { MonthReducer } from "../../interfaces/monthReducer";
import dayjs from "dayjs";

export const Heading = () => {
  const month = useSelector((state: MonthReducer) => state.month);
  const year = dayjs().year();
  const thisMonth = dayjs(new Date(year, month.currMonth, 1)).format(
    "MMM YYYY"
  );

  const dispatch = useDispatch();
  return (
    <div className={styles.monthHeading}>
      <div className={styles.navigation}>
        <button
          className={styles.arrows}
          onClick={() => {
            dispatch(prevMonth());
          }}
        >
          &#x2190;
        </button>
        <button
          className={styles.arrows}
          onClick={() => {
            dispatch(nextMonth());
          }}
        >
          &#x2192;
        </button>
      </div>

      <h4 className={styles.currMonth}>{thisMonth}</h4>
    </div>
  );
};
