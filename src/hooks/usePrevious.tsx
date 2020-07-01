import { useEffect, useRef } from "react";

export default (value: any) => {
    let ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};
