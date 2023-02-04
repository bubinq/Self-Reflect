import dayjs from "dayjs";
import styles from "./Day.module.css";
import { useSelector } from "react-redux";
import { MonthReducer } from "../../interfaces/monthReducer";

export const Day = ({ day, rowIdx }: { day: any; rowIdx: number }) => {
  const month = useSelector((state: MonthReducer) => state.month.currMonth);
  function displayClass(day: any): string | undefined {
    if (dayjs(day).month() !== Math.abs(month % 12)) {
      return styles.notMonth;
    } else if (
      dayjs(day).format("DD MM YYYY") === dayjs().format("DD MM YYYY")
    ) {
      return styles.isToday;
    } else {
      return styles.dayHeading;
    }
  }
  displayClass(day);
  return (
    <div className={styles.dayWrapper}>
      {rowIdx === 0 && (
        <h6 className={styles.weekHeader}>{day.format("dd")}</h6>
      )}
      <h5 className={displayClass(day)}>{day.format("DD")}</h5>
    </div>
  );
};
