import styles from "./Greeting.module.css"

export const Greeting = ({ time }: { time: String }) => {
    const greet = () => {
        let numericVal = Number(time.split(":")[0]);
        if (numericVal >= 5 && numericVal < 12) {
            return "Good Morning!"
        } else if (numericVal >= 12 && numericVal < 18) {
            return "Good Afternoon!"
        } else {
            return "Good Evening!"
        }
    }
    const text = greet();
    return (
        <div className={styles.greetWrapper}>
            <h3 className={styles.text}>{text}</h3>
        </div>
    );
};
