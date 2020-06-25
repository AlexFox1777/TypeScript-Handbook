import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography from "../typography/Typography";

type Props = {
    title: string;
    description: string;
    complexity: string; // time complexity
};

const Description: FunctionComponent<Partial<Props>> = ({
    title = "Title",
    description = "Description",
    complexity = "O(n)",
}) => {
    return (
        <Root>
            <div className="breaker"></div>
            <Typography lg>{title}</Typography>
            <Typography>{description}</Typography>
            <Typography secondary>{complexity}</Typography>
        </Root>
    );
};

const Root = styled.div`
    .breaker {
        background: #5bdfff;
        width: 10px;
        height: 150px;
        float: left;
        margin-right: 2%;
    }
`;

export default Description;
