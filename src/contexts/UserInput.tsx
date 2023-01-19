import { createContext, ReactElement, useState } from "react";


export const UserInputContext = createContext({
    inputValues: {
        sleepQuality: "1",
        mood: "1",
        physicalForm: "1",
        mentalForm: "1",
        financialStatus: "1",
        hasFinancialPlan: false,
        financialProgress: "1",
        mostValuedAssets: [String],
        socialLifeQuality: "1",
        socialSkills: "1",
        goingOut: "Once a month",
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
        hasFinancialPlan: false,
        financialProgress: "10",
        mostValuedAssets: [],
        socialLifeQuality: "10",
        socialSkills: "10",
        goingOut: "Once a month",
    })
    return (
        <UserInputContext.Provider value={{ inputValues, setInputValues }}>{children}</UserInputContext.Provider>
    )
}