import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import UserCard from "../components/UserCard";
import SearchPanel from "../components/SearchPanel";

import './UsersList.scss';

import api from "../api/API";

function UsersList() {

  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const currentUser = useSelector(state => state.user);

  const dispatch = useDispatch();

  const onSearch = inputText => {
    setSearchValue(inputText.toLowerCase().trim());
  };

  useEffect(() => {
    api.getUsers().then(users => {
      setUsers(users);

      if (currentUser) {
        dispatch({type: 'SET_USER', payload: null});
      }
    });
  }, []);

  return (
    <div className="users-list">
      <SearchPanel onSearch={onSearch} />
      <div className="users-list__grid">
      {
        users.map(user => {
          if (!searchValue || user.name.toLowerCase().indexOf(searchValue) !== -1) {
            return <UserCard key={'user-card-' + user.id} user={user} />
          }
          return null;
        })
      }
      </div>
    </div>
  );
}

export default UsersList;