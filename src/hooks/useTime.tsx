import { useState, useEffect } from "react";
import dayjs from "dayjs"

export const useTime = () => {
    const [date, setDate] = useState(dayjs(new Date()).format("DD.MM.YYYY"));
    const [time, setTime] = useState(dayjs(new Date()).format("HH:mm"));

    const updateTime = () => {
        setDate(dayjs(new Date()).format("DD.MM.YYYY"))
        setTime(dayjs(new Date()).format("HH:mm"))
    }
    useEffect(() => {
        const interval = setInterval(updateTime, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return [date, time];
}


