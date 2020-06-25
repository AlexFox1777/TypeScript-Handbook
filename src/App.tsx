import React, { FunctionComponent } from "react";
// styles
import styled from "styled-components";
// components
import PageDescrioption from "./components/page-description/PageDescription";
import InsertionSort from "./components/sorting/iterative_sorting/insertion_sort/InsertionSort";

const App: FunctionComponent = () => {
    return (
        <Root>
            <h1>Hello</h1>
            <h2>Hello</h2>
            <h3>Hello</h3>
            <h4>Hello</h4>
            <PageDescrioption algorithm={<InsertionSort />} />
        </Root>
    );
};

const Root = styled.div`
    max-width: ${(props) => props.theme.breakpoints.maxWidth}px;
    margin: auto;
`;

export default App;
