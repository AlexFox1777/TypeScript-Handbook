import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Typography from "../typography/Typography";

type Props = {
    title: string;
    description: string;
    complexity: string; // time complexity
    algorithm: Array<string>;
};

const Description: FunctionComponent<Partial<Props>> = ({
    title = "Title",
    description = "Description",
    complexity = "O(n)",
    algorithm = [],
}) => {
    return (
        <Root>
            <div className="breaker"></div>
            <Typography lg>{title}</Typography>
            <Typography secondary>{complexity}</Typography>
            <Typography>{description}</Typography>
            {algorithm.length > 0 && (
                <Typography className="sub-title">Algorithm</Typography>
            )}
            {algorithm.length > 0 &&
                algorithm.map((item) => <Typography>● {item}</Typography>)}
        </Root>
    );
};

const Root = styled.div`
    min-width: 340px;
    margin: 10px;
    .sub-title {
        font-size: 1.2em;
        font-weight: 500;
    }
    .breaker {
        background: #5bdfff;
        width: 10px;
        height: 150px;
        float: left;
        margin-right: 2%;
    }
    & > p {
        margin-bottom: 15px;
    }
`;

export default Description;
