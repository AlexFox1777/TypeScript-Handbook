import React, { FunctionComponent } from "react";

type Props = {
    title: string;
    description: string;
    tc: string; // time complexity
};

const Description: FunctionComponent<Props> = ({ title, description, tc }) => {
    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>{tc}</p>
        </div>
    );
};

export default Description;
