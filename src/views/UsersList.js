import { useState, useEffect } from 'react';
import UserCard from "../components/UserCard";
import './UsersList.css';

function UsersList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/3Milo/database/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="users-list">
      {
        users.map(user => <UserCard key={'user-card-' + user.id} user={user} />)
      }
    </div>
  );
}

export default UsersList;