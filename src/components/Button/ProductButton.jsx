import PropTypes from "prop-types";
import './Button.css';

const ProductButton = (props) => {

    const { text = "Default text", onClick } = props;

    return (
        <button className={"primaryButton"} onClick={onClick}>{text}</button>
    )
}

ProductButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
}

export default ProductButton;
