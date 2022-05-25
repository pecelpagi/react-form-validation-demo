import Label from "./Label";

export default (props) => {
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
}