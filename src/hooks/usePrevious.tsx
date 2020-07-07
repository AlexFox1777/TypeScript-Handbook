import { useEffect, useRef } from "react";

export default (value: any, init: any = undefined) => {
    let ref = useRef(init);
    const setRef = (value: any) => (ref.current = value);
    useEffect(() => {
        ref.current = value;
    });
    return [ref.current, setRef];
};
