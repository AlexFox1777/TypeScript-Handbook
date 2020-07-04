import React, { useState } from "react";
import { createContext, FunctionComponent } from "react";
type Props = {
    displayData: [string, string];
    setDisplayData: (display: [string, string]) => void;
    displayHistory: [[string, string]];
    pushDisplayHistory: (newData: [string, string]) => void;
    popDisplayHistory: () => void;
    inputData: Array<number>;
    setInputData: (input: Array<number>) => void;
};
export const DisplayContext = createContext<Props | undefined>(undefined);
export const Provider = DisplayContext.Provider;
export const Consumer = DisplayContext.Consumer;

export const DisplayProvider: FunctionComponent = ({ children }) => {
    const [displayData, setDisplay] = useState<[string, string]>(["", ""]);
    const [inputData, setInput] = useState<Array<number>>([]);
    const [displayHistory, setDisplayHistory] = useState<[["", ""]]>([
        ["", ""],
    ]);

    const setDisplayData = (display: [string, string]) => setDisplay(display);
    const setInputData = (input: Array<number>) => setInput(input);

    const pushDisplayHistory = (newData: [string, string]) =>
        setDisplayHistory((prev) => [newData, ...prev]);
    const popDisplayHistory = () =>
        setDisplayHistory((prev) => [...prev?.slice(1, prev.length)]);

    return (
        <Provider
            value={{
                displayData,
                setDisplayData,
                inputData,
                setInputData,
                displayHistory,
                pushDisplayHistory,
                popDisplayHistory,
            }}
        >
            {children}
        </Provider>
    );
};
