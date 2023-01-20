import { createContext, ReactElement, useState } from "react";


export const UserInputContext = createContext({
    inputValues: {
        sleepQuality: "1",
        mood: "1",
        physicalForm: "1",
        mentalForm: "1",
        financialStatus: "1",
        hasFinancialPlan: "neutral",
        financialProgress: "1",
        skillDedication: "15 minutes",
        socialLifeQuality: "1",
        socialSkills: "1",
        goingOut: "every other day",
    },
    setInputValues: (input: Object | any) => { }
});

export const UserInputProvider = ({ children }: { children: ReactElement }) => {
    const [inputValues, setInputValues] = useState({
        sleepQuality: "10",
        mood: "10",
        physicalForm: "10",
        mentalForm: "10",
        financialStatus: "10",
        hasFinancialPlan: "neutral",
        financialProgress: "10",
        skillDedication: "15 minutes",
        socialLifeQuality: "10",
        socialSkills: "10",
        goingOut: "every other day",
    })
    return (
        <UserInputContext.Provider value={{ inputValues, setInputValues }}>{children}</UserInputContext.Provider>
    )
}