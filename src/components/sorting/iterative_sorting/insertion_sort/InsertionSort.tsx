import React, { FunctionComponent, useState, useContext } from "react";
import NumberHolder from "../../../number-holder/NumberHolder";
import styled from "styled-components";
import History from "../../../history/History";
import { DisplayContext } from "../../../contexts/DisplayContext";

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
    const payload = useContext(DisplayContext);

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
        let j = iter.j,
            key = iter.key,
            i = iter.i;
        if (i < inputArr.length) {
            if (j >= 0 && inputArr[j] > key) {
                inputArr[j + 1] = inputArr[j];
                setIter({ ...iter, j: j - 1 });

                let iterInfo = `i=${i}, j=${j - 1}, key=${key}`;
                setInfo((prev) => [iterInfo, ...info]);
                payload?.setDisplayData(
                    `While ${inputArr[j]} is greater then ${key}`
                );
            } else {
                inputArr[j + 1] = key;
                setIter({
                    ...iter,
                    i: i + 1,
                    j: i,
                    key: numbers[i + 1],
                });
                let iterInfo = numbers[i + 1]
                    ? `i=${i + 1}, j=${i}, key=${numbers[i + 1]}`
                    : "sorted";
                setInfo((prev) => [iterInfo, ...info]);
            }
            setHistory((prev) => [[...inputArr], ...prev]);
        }

        setNms(inputArr);
    };

    let iBack = () => {
        if (iter.i >= 1) {
            let lastHistory = history[1].slice();
            let lastInfo = info[1].split(", ");

            let i = lastInfo[0].slice(2, lastInfo[0].length);
            let j = lastInfo[1].slice(2, lastInfo[1].length);
            let key = lastInfo[2].slice(4, lastInfo[2].length);

            setIter({ i: parseInt(i), j: parseInt(j), key: parseInt(key) });
            setHistory((prev) => [...prev.slice(1, prev.length)]);
            setInfo((prev) => [...prev.slice(1, prev.length)]);
            setNms(lastHistory);
        }
    };

    return (
        <Root>
            <Pannel>
                <ArrowBtn
                    onClick={() => history.length > 1 && iBack()}
                    isActive={history.length > 1}
                >
                    ←
                </ArrowBtn>
                <ArrowBtn
                    onClick={() => iter.i < nms.length && iSNext(nms)}
                    isActive={iter.i < nms.length}
                >
                    →
                </ArrowBtn>
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

const ArrowBtn = styled.button<{ isActive: boolean }>`
    cursor: pointer;
    margin: 2%;
    min-width: 4rem;
    height: 35px;
    border: none;
    background: ${(props) => (props.isActive ? "#20bbe0" : "#b5ced4")};
    border-radius: 4px;
    color: white;
    font-size: 2rem;
    outline: none;
    cursor: ${(props) => (props.isActive ? "pointer" : "not-allowed")};
    &:hover {
        background: ${(props) => (props.isActive ? "#0a91b1" : "#b5ced4")};
    }
`;

export default InsertionSort;
