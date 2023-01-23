import { displayMonth } from "../../utilities/calendar"
import styles from "./Calendar.module.css"
export const Calendar =() => {
    console.log(displayMonth());
    return (
        <div className={styles.calendarWrapper}></div>
    )
}