import { createContext } from "react";
type Props = {
    displayData: string;
    setDisplayData: (display: string) => void;
    inputData: Array<number>;
    setInputData: (input: Array<number>) => void;
};
export const DisplayContext = createContext<Props | undefined>(undefined);
export const Provider = DisplayContext.Provider;
export const Consumer = DisplayContext.Consumer;
