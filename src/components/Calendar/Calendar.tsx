import styles from "./Calendar.module.css";
import { Month } from "./Month";
import { Heading } from "./Heading";
import { Header } from "../Header";
export const Calendar = () => {
  return (
    <div className={styles.calendarWrapper}>
      <Header></Header>
      <div className={styles.calendarHeading}>
        <Heading></Heading>
      </div>

      <Month></Month>
    </div>
  );
};
