import { createContext } from "react";
type Props = {
    displayData: string;
    setDisplayData: (display: string) => void;
    inputData: Array<number>;
    setInputData: (input: Array<number>) => void;
};
export const displayContext = createContext<Partial<Props> | undefined>(
    undefined
);
export const Provider = displayContext.Provider;
export const Consumer = displayContext.Consumer;
