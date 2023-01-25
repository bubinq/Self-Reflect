import dayjs from "dayjs"
import styles from "./Day.module.css"
import { useSelector } from "react-redux"
import { MonthReducer } from "../../interfaces/monthReducer"

export const Day = ({day, rowIdx}: {day:any, rowIdx: number}) => {
    const month = useSelector((state: MonthReducer) => state.month.currMonth);
    let date = dayjs(day).month()
    console.log(date)
    function displayClass(day: any) {
        if (date !== Math.abs(month % 12)) {

        }
        console.log(day.format("MM"));
    }
    return (
        <div className={styles.dayWrapper}>
            {rowIdx === 0 && (
                <h6 className={styles.weekHeader}>{day.format("dd")}</h6>
            )}
            <h5 className={styles.dayHeading}>{day.format("DD")}</h5>    
        </div>
    )
}