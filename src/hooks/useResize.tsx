import { useState, useEffect } from "react";


export const useResize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const handleResize = () => {
        setSize({ width: window.innerWidth, height: window.innerHeight })
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return {size};
}


