import { createContext, ReactElement, useState } from "react";


export const UserInputContext = createContext({
    inputValues: {
        sleepQuality: 1,
        mood: 1,
        physicalForm: 1,
        mentalForm: 1,
        financialStatus: 1,
        hasFinancialPlan: false,
        financialProgress: 1,
        mostValuedAssets: [],
        socialLifeQuality: 1,
        socialSkills: 1,
        goingOut: "Once a month",
    },
    setInputValues: (input: Object | any) => { }
});

export const UserInputProvider = ({ children }: { children: ReactElement }) => {
    const [inputValues, setInputValues] = useState({
        sleepQuality: 1,
        mood: 1,
        physicalForm: 1,
        mentalForm: 1,
        financialStatus: 1,
        hasFinancialPlan: false,
        financialProgress: 1,
        mostValuedAssets: [],
        socialLifeQuality: 1,
        socialSkills: 1,
        goingOut: "Once a month",
    })
    return (
        <UserInputContext.Provider value={{ inputValues, setInputValues }}>{children}</UserInputContext.Provider>
    )
}