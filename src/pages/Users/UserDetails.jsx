import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const UserDetails = () => {
    const params = useParams();

    const [user, setUser] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
                if (!res.ok) {
                    throw new Error("Failed to fetch")
                }

                const data = await res.json()
                setUser(data)
            } catch (e) {
                console.error(e.message)
                setError(e.message)
            }
        }

        getUser()
    }, [params.userId]);


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