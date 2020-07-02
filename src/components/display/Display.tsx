import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import Typography from "../typography/Typography";

type Props = {
    message: string;
};

const Display: FunctionComponent<Partial<Props>> = ({
    message = "While blabka",
}) => {
    return (
        <Root>
            <Typography color="#f7e34f">{message}</Typography>
            <Typography color="#ff9538">bka</Typography>
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    justify-content: space-between;
    background: black;
    color: white;
    width: 100%;
    padding: 10px;
`;

// #f7e34f
// #ff9538
// #ff5959
// #67d4ff

export default Display;
