import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// styles
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

const theme = {
    primary: "#8941FF", // purple
    secondary: "#9a9a9a", // blue

    breakpoints: {
        minWidth: 280,
        maxWidth: 1000,
    },
};

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Normalize />
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
