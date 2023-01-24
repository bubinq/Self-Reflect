import dayjs from "dayjs"
import styles from "./Day.module.css"

export const Day = ({day, rowIdx}: {day:any, rowIdx: number}) => {
    return (
        <div className={styles.dayWrapper}>
            {rowIdx === 0 && (
                <h6>{day.format("dd")}</h6>
            )}
            <h5>{day.format("DD")}</h5>    
        </div>
    )
}