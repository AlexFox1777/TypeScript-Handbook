import React, { FunctionComponent } from "react";
import NumberHolder from "../number-holder/NumberHolder";
import styled from "styled-components";

type Props = {
    history: Array<Array<number>>;
};

const History: FunctionComponent<Partial<Props>> = ({ history = [[]] }) => {
    return (
        <div>
            {history &&
                history.length > 0 &&
                history.map(
                    (item, index) =>
                        item.length > 0 && (
                            <List>
                                {index + " . "}
                                {item.map((record) => (
                                    <NumberHolder
                                        number={record}
                                        state="x"
                                    ></NumberHolder>
                                ))}
                            </List>
                        )
                )}
        </div>
    );
};

const List = styled.div`
    display: flex;
    flex-wrap: row wrap;
`;

export default History;
