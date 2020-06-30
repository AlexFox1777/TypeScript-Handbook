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
        console.log("Hello");
        let inputArr = arr.slice();
        let j = iter.j,
            key = iter.key,
            i = iter.i;
        if (i < inputArr.length) {
            if (j >= 0 && inputArr[j] > key) {
                inputArr[j + 1] = inputArr[j];
                setIter({ ...iter, j: j - 1 });
            } else {
                inputArr[j + 1] = key;
                setIter({
                    ...iter,
                    i: i + 1,
                    j: i,
                    key: numbers[i + 1],
                });
            }

            setHistory((prev) => [[...inputArr], ...prev]);

            let iterInfo = `i=${iter.i}, j=${iter.j}, key=${iter.key}`;
            setInfo((prev) => [iterInfo, ...info]);
        }

        setNms(inputArr);
    };

    let iBack = () => {
        if (iter.i >= 2) {
            setIter({ i: iter.i - 2, j: iter.j - 2, key: numbers[iter.i - 2] });
            let lastHistory = history[1].slice();
            console.log("Last history ", lastHistory);
            setNms(lastHistory);
        }
    };

    return (
        <Root>
            <Pannel>
                <ArrowBtn
                    onClick={() => iter.i > 2 && iBack()}
                    isActive={iter.i > 2}
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
