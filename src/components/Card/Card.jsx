import'./Card.css'
import PropTypes from "prop-types";

const Card = ({data}) => {
    const {
        image,
        level,
        title,
        user,
        rating,
        students,
        modules,
        duration
    } = data;

    const durationHours = Math.floor(duration / 60 / 60);
    const durationMinutes = Math.floor(duration / 60) - durationHours * 60;

    return (
        <div className="card">
            <div className="image__container">
                <img
                    src={image}
                    alt=""
                />
                <div className="level">{level}</div>
            </div>
            <h3 className="card__title">{title}</h3>

            <div className="card__info">
                <div className="user">
                    <img
                        src={user.avatar}
                        alt={user.name}
                    />
                    <p>{user.name}</p>
                </div>
                <div className="rating">
                    <p>{rating}</p>
                </div>
            </div>

            {/*Якщо це карточка, яка відображає мої поточні курси*/}
            {/* <div>*/}
            {/*  <progress value="50" max="100">*/}
            {/*    50%*/}
            {/*  </progress>*/}
            {/*  <div class="card__info">*/}
            {/*    <p>5 / 10 Modules</p>*/}
            {/*    <div>50 %</div>*/}
            {/*  </div>*/}
            {/*</div>*/}

            <div className="card__info">
                <div>{students} Student</div>
                <div>{modules} Modules</div>
                <div>{durationHours}h {durationMinutes}m</div>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string.isRequired,
        level: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        user: PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        }),
        rating: PropTypes.number.isRequired,
        students: PropTypes.number.isRequired,
        modules: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
    })
}

export default Card