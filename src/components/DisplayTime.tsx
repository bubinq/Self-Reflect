import { useTime } from "../hooks/useTime";
import { Greeting } from "./Greeting";
import styles from "./DisplayTime.module.css";

export const DisplayTime = () => {
    const [date, time] = useTime();

    return (
        <div className={styles.displayWrapper}>
            <Greeting time={time}></Greeting>
            <span className={styles.date}>{date}</span>
            <span className={styles.time}>{time}</span>
        </div>
    );
};
