import React from "react";
import Label from "./Label";

export default React.forwardRef((props, ref) => {
    const { value, onChange, label, placeholder } = props;

    const handleChangeValue = (e) => {
        onChange(e.target.value);
    }

    return (
        <div className="input-wrapper">
            <Label {...{ label }} />
            <input
                type="text"
                onChange={handleChangeValue}
                {...{ value, placeholder }}
            />
        </div>
    )
});