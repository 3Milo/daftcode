import { useState, useEffect } from 'react';
import UserCard from "../components/UserCard";
import './UsersList.css';

import api from "../api/API";

function UsersList() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.getUsers().then(users => setUsers(users));
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