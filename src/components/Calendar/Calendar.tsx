import styles from "./Calendar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { MonthReducer } from "../../interfaces/monthReducer";
import { Month } from "./Month";
import { nextMonth, prevMonth } from "../../redux/monthInput";
export const Calendar = () => {
  const month = useSelector((state: MonthReducer) => state.month.currMonth);
  const dispatch = useDispatch();
  console.log(month);
  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarHeding}>
        <h1>Hi from Calendar</h1>
        <button
          onClick={() => {
            dispatch(nextMonth());
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            dispatch(prevMonth());
          }}
        >
          Prev
        </button>
      </div>

      <Month></Month>
    </div>
  );
};
