const Button = (props) => {

    const { text = "Default text" } = props;

    return (
        <button>{text}</button>
    )
}

export default Button;
