import styles from "./Month.module.css";
import { useSelector } from "react-redux";
import { MonthReducer } from "../../interfaces/monthReducer";
import { displayMonth } from "../../utilities/calendar";
import { Day } from "./Day";

export const Month = () => {
  const month = useSelector((state: MonthReducer) => state.month.currMonth);
  const currMonth: any = displayMonth(month);

  return (
    <div className={styles.monthWrapper}>
      {currMonth.map((week: any, idx: number) => (
        <div key={idx} className={styles.weekWrapper}>
          {week.map((day: any) =>
            <Day key={day.$d} day={day} rowIdx={idx}></Day>
          )}
        </div>
      ))}
    </div>
  );
};
