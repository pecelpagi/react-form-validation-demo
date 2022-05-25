export default (props) => {
    const { label } = props;

    if (!label) return null;

    return (
        <label>
            {label}
        </label>
    );
}