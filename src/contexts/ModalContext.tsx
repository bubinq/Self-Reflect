import { createContext, ReactElement, useState } from "react";

export const ModalContext = createContext({
    modalIdx: 1,
    setModalIdx: (index: number | any) => { }
});

export const ModalProvider = ({ children }: { children: ReactElement }) => {
    const [modalIdx, setModalIdx] = useState(1);
    return (
        <ModalContext.Provider value={{ modalIdx, setModalIdx }}>{children}</ModalContext.Provider>
    )
}