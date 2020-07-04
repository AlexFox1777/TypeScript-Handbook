import React, { FunctionComponent, useContext, useState } from "react";
import styled from "styled-components";
import Typography from "../typography/Typography";
import { DisplayContext } from "../contexts/DisplayContext";

type Props = {
    message1: string;
    message2: string;
};

const Display: FunctionComponent<Partial<Props>> = ({
    message1 = "",
    message2 = "",
}) => {
    const context = useContext(DisplayContext);
    const [isOpen, setIsOpen] = useState(true);

    const controlTab = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <Root>
            <div className={`content ${isOpen ? " content-open" : " "}`}>
                <div onClick={() => controlTab()} className="angle-container">
                    <Typography color="#f7e34f" className="title">
                        Console
                    </Typography>
                    <i
                        className={`fa fa-angle-down ${
                            isOpen ? " fa fa-angle-rotate" : ""
                        }`}
                    ></i>
                </div>
                <div
                    className={`content-text ${
                        isOpen ? " content-text-open" : " "
                    }`}
                >
                    <Typography color="#f7e34f">
                        {message1.length > 0
                            ? message1
                            : context?.displayData[0]}
                    </Typography>
                    <Typography color="#ff9538">
                        {message2.length > 0
                            ? message2
                            : context?.displayData[1]}
                    </Typography>
                </div>
            </div>
        </Root>
    );
};

const Root = styled.div`
    width: 100%;
    position: relative;
    margin-top: 35px;
    .angle-container {
        cursor: pointer;
        width: 130px;
        display: flex;
        justify-content: space-around;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: black;
        padding: 5px 0 5px 0;
    }
    .fa-angle-down {
        font-size: 1.5rem;
        transition: all 0.6s cubic-bezier(0.08, 1.09, 0.32, 1.275);
        color: rgba(255, 255, 255, 1);
    }
    .fa-angle-rotate {
        transform: rotate(180deg);
    }
    .content {
        color: rgba(73, 73, 73, 0.699);
        transform: translateY(-20px);
        height: 12px;
        border-radius: 3px;
        transition: all 200ms cubic-bezier(0.6, -0.28, 0.735, 0.045);
    }
    .content-open {
        padding: 10px;
        color: white;
        background: black;
        transform: translateY(0px);
        height: 100%;
        transition: all 350ms cubic-bezier(0.08, 1.09, 0.32, 1.275);
    }
    .content-text {
        padding: 20px 10px 10px 5px;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease-in;
        display: flex;
        justify-content: space-between;
    }
    .content-text-open {
        visibility: visible;
        opacity: 1;
        transition: all 0.8s ease-in;
    }
`;

// #f7e34f
// #ff9538
// #ff5959
// #67d4ff

export default Display;
