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
      <button
        onClick={() => {
          dispatch(prevMonth());
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          dispatch(nextMonth());
        }}
      >
        Next
      </button>
      <h4>{thisMonth}</h4>
    </div>
  );
};
