import React, { useState } from "react";
import { createContext, FunctionComponent } from "react";
type Props = {
    displayData: [string, string];
    setDisplayData: (display: [string, string] | undefined) => void;

    displayHistory: Array<[string, string]> | undefined;
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

    const [displayHistory, setDisplayHistory] = useState<
        Array<[string, string]> | undefined
    >();

    const setDisplayData = (display: [string, string] | undefined) =>
        display && setDisplay(display);
    const setInputData = (input: Array<number>) => setInput(input);

    const pushDisplayHistory = (newData: [string, string]) =>
        setDisplayHistory((prev) => (prev ? [newData, ...prev] : [newData]));

    const popDisplayHistory = () =>
        setDisplayHistory((prev) =>
            prev ? [...prev?.slice(1, prev.length)] : undefined
        );

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
