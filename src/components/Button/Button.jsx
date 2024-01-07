import PropTypes from "prop-types";

const Button = (props) => {

    const { text = "Default text" } = props;

    return (
        <button onClick={props.onClick}>{text}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string
}

export default Button;
