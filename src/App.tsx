import React, { FunctionComponent } from "react";
// styles
import styled from "styled-components";
// components
import PageDescrioption from "./components/sorting/iterative_sorting/insertion_sort/PageDescription";
import InsertionSort from "./components/sorting/iterative_sorting/insertion_sort/InsertionSort";

const App: FunctionComponent = () => {
    return (
        <Root>
            <PageDescrioption />
        </Root>
    );
};

const Root = styled.div`
    max-width: ${(props) => props.theme.breakpoints.maxWidth}px;
    min-width: 350px;
    margin: auto;
`;

export default App;
