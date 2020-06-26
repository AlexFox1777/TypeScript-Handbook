import React, { FunctionComponent, useState } from "react";
import NumberHolder from "../../../number-holder/NumberHolder";
import styled from "styled-components";

type Props = {
    numbers: Array<{ number: number; state: "current" | "previous" | "x" }>;
};

const InsertionSort: FunctionComponent<Partial<Props>> = ({
    numbers = [
        { number: 5, state: "previous" },
        { number: 2, state: "current" },
        { number: 6, state: "x" },
        { number: 6, state: "x" },
        { number: 1, state: "x" },
        { number: 3, state: "x" },
        { number: 4, state: "x" },
    ],
}) => {
    const [nms, setNms] = useState(numbers);
    const [iterNum, setIterNum] = useState(1);

    let insertionSort = (
        arr: Array<{ number: number; state: "current" | "previous" | "x" }>
    ) => {
        let inputArr = arr.slice();
        let length = inputArr.length;
        for (let i = 1; i < length; i++) {
            let key = inputArr[i].number;
            inputArr[i].state = "current";
            let j = i - 1;
            while (j >= 0 && inputArr[j].number > key) {
                inputArr[j + 1].number = inputArr[j].number;
                j = j - 1;
            }
            inputArr[j + 1].number = key;
            inputArr[j + 1].state = "previous";
        }
        return inputArr;
    };

    let iSNext = (
        arr: Array<{ number: number; state: "current" | "previous" | "x" }>
    ) => {
        if (nms.length > iterNum) {
            let inputArr = arr.slice();
            let length = inputArr.length;

            let key = inputArr[iterNum].number;
            inputArr[iterNum].state = "current";
            let j = iterNum - 1;

            if (j >= 0 && inputArr[j].number > key) {
                inputArr[j + 1].number = inputArr[j].number;
                inputArr[j].number = key;
                inputArr[j].state = "previous";
                setIterNum(iterNum - 1);
            } else {
                setIterNum(iterNum + 1);
            }
            setNms(inputArr);
        }
    };

    return (
        <Root>
            {/* {console.log("SORT ", insertionSort(numbers))} */}
            <Pannel>
                <ArrowBtn>←</ArrowBtn>
                <ArrowBtn onClick={() => iSNext(nms)}>→</ArrowBtn>
            </Pannel>

            <List>
                {nms &&
                    nms.length > 0 &&
                    nms.map((item) => (
                        <NumberHolder number={item.number} state={item.state} />
                    ))}
            </List>
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #cacaca;
    border-radius: 4px;
    padding: 1rem;
    width: 100%;
    min-width: 300px;
`;

const Pannel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 60px;
`;

const List = styled.div`
    display: flex;
    flex-wrap: row wrap;
`;

const ArrowBtn = styled.button`
    cursor: pointer;
    margin: 2%;
    min-width: 4rem;
    height: 35px;
    border: none;
    background: #20bbe0;
    border-radius: 4px;
    color: white;
    font-size: 2rem;
    outline: none;
    &:hover {
        background: #0a91b1;
    }
`;

export default InsertionSort;
