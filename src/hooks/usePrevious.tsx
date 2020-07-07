import { useEffect, useRef } from "react";

export default (value: any, init: any = undefined) => {
    let ref = useRef(init);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};
