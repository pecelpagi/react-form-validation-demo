import React from "react";
import Select from 'react-select';
import Label from "./Label";

const customStyles = {
    container: base => ({
        ...base,
        width: '100%',
    }),
    control: base => ({
        ...base,
    })
};

const selectStyles = {
    styles: customStyles,
    theme: (theme) => ({
        ...theme,
        colors: {
            ...theme.colors,
            primary: "#24292f",
            primary25: "#ececec",
        },
    })
}

export default React.forwardRef((props, ref) => {
    const { value, onChange, options, label } = props;

    const found = options.find((x) => (String(x.value) === String(value)));

    const handleChangeValue = (e) => { onChange(e.value); }

    return (
        <div className="input-wrapper">
            <Label {...{ label }} />
            <Select
                {...selectStyles}
                {...{ options }}
                value={found}
                onChange={handleChangeValue}
            />
        </div>
    )
});