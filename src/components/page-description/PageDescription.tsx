import React, { FunctionComponent } from "react";
import Description from "../description/Description";

type Props = {
    title: string;
    description: string;
    complexity: string; // time complexity
    algorithm: React.ReactNode;
};

const PageDescrioption: FunctionComponent<Partial<Props>> = ({
    title,
    description,
    complexity,
    algorithm,
}) => {
    return (
        <div>
            <Description
                title={title}
                description={description}
                complexity={complexity}
            />
            {/* Algorithm component */}
            {algorithm}
            {/* History */}
        </div>
    );
};

export default PageDescrioption;
