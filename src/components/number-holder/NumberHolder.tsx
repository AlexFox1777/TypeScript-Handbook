import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography from "../typography/Typography";

type Props = {
    number: string | number;
    state: "previous" | "current" | "x";
};

const NumberHolder: FunctionComponent<Partial<Props>> = ({ number, state }) => {
    return (
        <Root>
            {state === "current" && (
                <Typography color="#e03b3bdb" lg>
                    ↓
                </Typography>
            )}
            {state === "previous" && <Typography color="#ff8f00">●</Typography>}

            {state === "x" && <Typography color="white">-</Typography>}

            <Typography className="number-box" color="white">
                {number}
            </Typography>
        </Root>
    );
};

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5%;
    .number-box {
        background: green;
        padding: 0.8rem 1rem 0.8rem 1rem;
        border-radius: 4px;
    }
`;

export default NumberHolder;
