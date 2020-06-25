import React, { FunctionComponent } from "react";
import styled from "styled-components";

type Props = {
    title: string;
    description: string;
    complexity: string;
};

const Card: FunctionComponent<Props> = ({
    title = "Title",
    description = "Description",
    complexity = "O(n)",
}) => {
    return <Root></Root>;
};

const Root = styled.div``;

export default Card;
