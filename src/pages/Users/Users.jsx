import UserCard from "../../components/Users/UserCard.jsx";
import './Users.css'
import useFetch from "../../hooks/useFetch.jsx";

const Users = () => {

    const {data: users, loading, error} = useFetch('https://jsonplaceholder.typicode.com/users');

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Something went wrong: {error.message}</div>
    }

    return (
        <div className="users-container">
            <h1 className="users-heading">Users</h1>
            <div className="user-cards-container">
                {!!users && users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default Users