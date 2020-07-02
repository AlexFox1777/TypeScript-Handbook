import React, { FunctionComponent, useState, useContext } from "react";
import Description from "../../../description/Description";
import InsertionSort from "./InsertionSort";
import { Provider, DisplayContext } from "../../../contexts/DisplayContext";
import Display from "../../../display/Display";

const PageDescrioption: FunctionComponent = () => {
    const [displayData, setData] = useState("");
    const [inputData, setInputData] = useState<Array<number>>([]);
    const payload = useContext(DisplayContext);

    const setDisplayData = (message: string) => {
        setData(message);
    };

    return (
        <Provider
            value={{ displayData, setDisplayData, inputData, setInputData }}
        >
            <Description
                title={INSERTION_SORT.title}
                description={INSERTION_SORT.description}
                complexity={INSERTION_SORT.complexity}
                algorithm={INSERTION_SORT.algorithm}
            />
            <Display message={payload?.displayData} />
            {/* Algorithm component */}
            <InsertionSort />
            {/* History */}
        </Provider>
    );
};
const INSERTION_SORT = {
    title: "Insertion Sort",
    description:
        "Insertion sort works by moving from left to right over an input list. You could compare it to the way you would sort a set of cards that you were holding in your hand. You’d scan the set from left to right, grabbing each card as you go and moving it to the position where the card to it’s left would be smaller or equal to the current card’s value. After you move the card furthest to the right, you’ll be left with a set of cards that has been sorted in ascending order. Insertion sort will use the current item as a “key”, and then search through the items to the left of that item in the input list for the place that the key should go. This means that the sub-list to the left of the current “key” will already be sorted, and will remain sorted after every iteration of insertion sort.",
    complexity: "O(n²), or quadratic, time in the worst case",
    algorithm: [
        "Iteration 0 (unsorted array): [5,3,1,4,6]",
        "Iteration 1, key is 3 (was at index 1): [5,3,1,4,6] →[3,5,1,4,6]",
        "Iteration 2, key is 1 (was at index 2): [3,5,1,4,6] →[1,3,5,4,6]",
        "Iteration 3, key is 4 (was at index 3, ): [1,3,5,4,6] → [1,3,4,5,6]",
        "Iteration 4, key is 6 (was at index 4): [1,3,4,5,6]",
    ],
};
export default PageDescrioption;
