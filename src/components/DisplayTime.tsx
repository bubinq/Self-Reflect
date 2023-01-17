import { useTime } from "../hooks/useTime";
import { Greeting } from "./Greeting";
import styles from "./DisplayTime.module.css";

export const DisplayTime = () => {
    const [date, time] = useTime();

    return (
        <div className={styles.displayWrapper}>
            <span>Today is: {date}</span>
            <br></br>
            <span>@: {time}</span>
            <Greeting time={time}></Greeting>
        </div>
    );
};
