import React, { FunctionComponent } from "react";
import NumberHolder from "../number-holder/NumberHolder";
import styled from "styled-components";

type Props = {
    history: Array<Array<number>>;
    info: Array<string>;
};

const History: FunctionComponent<Partial<Props>> = ({
    history = [[]],
    info = [],
}) => {
    return (
        <Root>
            {history &&
                history.length > 0 &&
                history.map(
                    (item, indexI) =>
                        item.length > 0 && (
                            <RecordColumn>
                                {info.length > 0 && (
                                    <Info>
                                        <p className="str-info">
                                            {info[indexI]}
                                        </p>
                                    </Info>
                                )}
                                <Record>
                                    {item.map((record, indexJ) => (
                                        <NumberHolder
                                            number={record}
                                            history={true}
                                            color={
                                                history.length -
                                                    indexI -
                                                    indexJ >
                                                0
                                                    ? "#ade0dd"
                                                    : "white"
                                            }
                                            state={
                                                history.length -
                                                    indexI -
                                                    indexJ >
                                                0
                                                    ? "previous"
                                                    : "x"
                                            }
                                        ></NumberHolder>
                                    ))}
                                </Record>
                            </RecordColumn>
                        )
                )}
        </Root>
    );
};

const Root = styled.div`
    /* width: 45%; */
    min-width: 300px;
    margin: 20px 20px;
`;

const Info = styled.div`
    display: flex;
    justify-content: flex-end;
    color: gray;
    width: 100%;
    .str-info {
        text-align: center;
        width: 38%;
        font-size: 0.8em;
        border-bottom: 1.5px solid #ffc1c1;
        padding: 1%;
        /* margin: 1%; */
    }
`;

const Record = styled.div`
    display: flex;
    flex-wrap: row wrap;
    align-items: flex-end;
    justify-content: center;
    .index {
        white-space: nowrap;
        padding: 0.8rem 1rem 0.8rem 1rem;
        margin: 0;
    }
`;

const RecordColumn = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    margin: 4px;
    &:hover {
        background: #f5f5f5;
    }
`;

export default History;
