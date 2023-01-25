import styles from "./Calendar.module.css";
import { Month } from "./Month";
import { Heading } from "./Heading";
export const Calendar = () => {
  return (
    <div className={styles.calendarWrapper}>
      <div className={styles.calendarHeding}>
        <Heading></Heading>
      </div>

      <Month></Month>
    </div>
  );
};
