import React, { FunctionComponent } from "react";
import NumberHolder from "../../../number-holder/NumberHolder";
import styled from "styled-components";

type Props = {
    numbers: Array<number>;
};

const InsertionSort: FunctionComponent<Partial<Props>> = ({
    numbers = [9, 3, 2, 5, 8, 2, 7, 4],
}) => {
    return (
        <Root>
            <NumberHolder number={2} state="current" />
            <NumberHolder number={2} state="previous" />
            <NumberHolder number={2} />
            <NumberHolder number={2} />
            <NumberHolder number={2} />
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    flex-wrap: row wrap;
`;

export default InsertionSort;
