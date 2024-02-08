import {useParams} from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";

const UserDetails = () => {
    const params = useParams();


    const {data: user, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Something went wrong: {error.message}</div>
    }


    return (
        <div className="user-details-container">
            <h1 className="user-details-heading">User Details</h1>
            {(user && (
                <div className="user-details">
                    <h2 className="user-details__name">{user.name}</h2>
                    <p className="user-details__info">Email: {user.email}</p>
                    <p className="user-details__info">Username: {user.username}</p>
                    <p className="user-details__info">Phone: {user.phone}</p>
                </div>
            )) || <p className="error-message">{error}</p>}
        </div>
    );
};

export default UserDetails;