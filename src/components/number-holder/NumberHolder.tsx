import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography from "../typography/Typography";

type Props = {
    number: string | number;
    state: "previous" | "current" | "x";
    history: boolean;
    color: string;
};

const NumberHolder: FunctionComponent<Partial<Props>> = ({
    number,
    state,
    color = "#ff8f00",
    history = false,
}) => {
    return (
        <Root history={history}>
            {state === "current" && (
                <Typography color="#e03b3bdb" lg>
                    ↓
                </Typography>
            )}
            {state === "previous" && (
                <Typography color={color} sm>
                    ●
                </Typography>
            )}

            {state === "x" && (
                <Typography color="white" sm>
                    -
                </Typography>
            )}

            <Typography
                className="number-box"
                color={history ? "black" : "white"}
            >
                {number}
            </Typography>
        </Root>
    );
};
type RootProps = {
    history: boolean;
};

const Root = styled.div<RootProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5%;
    .number-box {
        background: ${(props) => (props.history ? "" : "green")};
        padding: ${(props) =>
            props.history ? "0.3rem 0.4rem" : "0.3rem 0.6rem"};
        border-radius: 4px;
    }
`;

export default NumberHolder;
