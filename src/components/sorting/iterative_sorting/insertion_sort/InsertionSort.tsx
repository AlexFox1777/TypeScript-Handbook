import React, { FunctionComponent, useState } from "react";
import NumberHolder from "../../../number-holder/NumberHolder";
import styled from "styled-components";
import History from "../../../history/History";

type Props = {
    numbers: Array<number>;
};

const InsertionSort: FunctionComponent<Partial<Props>> = ({
    numbers = [5, 2, 7, 6, 1, 3, 4],
}) => {
    const [nms, setNms] = useState(numbers);
    const [history, setHistory] = useState([numbers]);
    const [info, setInfo] = useState<Array<string>>([
        `i=1, j=0, key=${numbers[1]}`,
    ]);
    const [iter, setIter] = useState({ i: 1, j: 0, key: numbers[1] });

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

    let iSNext = (arr: Array<number>) => {
        let inputArr = arr.slice();
        // mark the i element as the current
        // mark the j element as the previous
        let j = iter.j,
            key = iter.key,
            i = iter.i;
        if (i < inputArr.length) {
            if (j >= 0 && inputArr[j] > key) {
                inputArr[j + 1] = inputArr[j];
                setIter({ ...iter, j: j - 1 });
                console.log("1, J = ", j, " k  = ", key);
            } else {
                inputArr[j + 1] = key;
                setIter({
                    ...iter,
                    i: i + 1,
                    j: i,
                    key: numbers[i + 1],
                });
                console.log(
                    "2, J = ",
                    j,
                    " k  = ",
                    key,
                    " inputArr[j + 1 ] = ",
                    inputArr[j + 1]
                );
            }
        }

        setHistory((prev) => [[...inputArr], ...prev]);

        let iterInfo = `i=${iter.i}, j=${iter.j}, key=${iter.key}`;
        setInfo((prev) => [iterInfo, ...info]);

        setNms(inputArr);
    };

    return (
        <Root>
            <Pannel>
                <ArrowBtn>←</ArrowBtn>
                <ArrowBtn onClick={() => iSNext(nms)}>→</ArrowBtn>
            </Pannel>

            <List>
                {nms &&
                    nms.length > 0 &&
                    nms.map((item, index) => (
                        <NumberHolder
                            number={item}
                            state={
                                index === iter.i
                                    ? "current"
                                    : index === iter.j
                                    ? "previous"
                                    : "x"
                            }
                        />
                    ))}
            </List>
            <History history={history} info={info}></History>
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #cacaca;
    border-radius: 4px;
    /* padding: 1rem; */
    width: 100%;
    min-width: 350px;
`;

const Pannel = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 60px;
`;

const List = styled.div`
    display: flex;
    flex-wrap: row;
    justify-content: center;
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
