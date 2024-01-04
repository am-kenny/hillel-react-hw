import {useEffect, useState} from "react";
import UserCard from "../../components/Users/UserCard.jsx";
import './Users.css'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!res.ok) {
                    throw new Error("Failed to fetch")
                }

                const data = await res.json()
                setUsers(data)
            } catch (e) {
                console.error(e.message)
            }
        }

        getUsers()
    }, []);

    return (
        <div className="users-container">
            <h1 className="users-heading">Users</h1>
            <div className="user-cards-container">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default Users