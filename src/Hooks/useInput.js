import { useState } from "react";

// eslint-disable-next-line
export default defaultValue => {
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        const {
            target: { value }
        } = e;
        setValue(value);
    };

    return { value, onChange, setValue };
};