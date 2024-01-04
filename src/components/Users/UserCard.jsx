import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const UserCard = ({user}) => {
    return (
        <div className="user-card">
            <h2 className="user-card__name">{user.name}</h2>
            <p className="user-card__email">{user.email}</p>
            <Link to={`${user.id}`} className="user-card__link">See more</Link>
        </div>
    );

};

UserCard.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })
};

export default UserCard;