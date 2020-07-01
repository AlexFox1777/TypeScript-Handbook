import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Variants = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    p: "p",
} as const;

type Variant = typeof Variants[keyof typeof Variants];

type Props = {
    variant: Variant;

    size: number;
    sm: boolean;
    md: boolean;
    lg: boolean;
    xl: boolean;

    primary: boolean;
    secondary: boolean;

    color: string;
    vertical: boolean;
    rotate: number;

    danger: boolean;
    warning: boolean;
    success: boolean;
    info: boolean;

    className: string;
};

const Typography: FunctionComponent<Partial<Props>> = ({
    color = "#424242",
    danger,
    warning,
    success,
    info,
    primary,
    secondary,

    vertical = false,
    rotate = 0,

    variant = "h1",
    size = 1,
    sm,
    md,
    lg,
    xl,

    children,
    className,
    ...rest
}) => {
    let s = {
        sm: 0.8,
        md: 1,
        lg: 2,
        xl: 3,
    };

    let fontSize = sm ? s.sm : md ? s.md : lg ? s.lg : xl ? s.xl : size;

    return (
        <Text
            color={color}
            danger={danger}
            warning={warning}
            success={success}
            info={info}
            primary={primary}
            secondary={secondary}
            size={fontSize}
            vertical={vertical}
            rotate={rotate}
            className={className}
            {...rest}
        >
            {children}
        </Text>
    );
};

export default Typography;

const Text = styled.p<Partial<Props>>`
    font-size: ${(props) => props.size + "em"};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    color: ${(props) =>
        props.primary
            ? props.theme.primary
            : props.secondary
            ? props.theme.secondary
            : props.danger
            ? props.theme.colors.danger
            : props.warning
            ? props.theme.colors.warning
            : props.success
            ? props.theme.colors.success
            : props.info
            ? props.theme.colors.info
            : props.color};
    writing-mode: ${(props) =>
        props.vertical ? "vertical-lr" : "vertical-hr"};
    transform: ${(props) => `rotate(${props.rotate}deg)`};
    user-select: none;
`;
