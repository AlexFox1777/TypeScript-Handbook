import React, { FunctionComponent } from "react";
import Description from "../description/Description";

type Props = {
    title: string;
    description: string;
    complexity: string; // time complexity
    algorithm: React.ReactNode;
    algorithmDescription: Array<string>;
};

const PageDescrioption: FunctionComponent<Partial<Props>> = ({
    title,
    description,
    complexity,
    algorithm,
    algorithmDescription = [],
}) => {
    return (
        <div>
            <Description
                title={title}
                description={description}
                complexity={complexity}
                algorithm={algorithmDescription}
            />
            {/* Algorithm component */}
            {algorithm}
            {/* History */}
        </div>
    );
};

export default PageDescrioption;
