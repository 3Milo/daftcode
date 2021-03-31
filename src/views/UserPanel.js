import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostCard from "../components/PostCard";
import Header from "../components/Header";
import Modal from "../components/Modal";
import SearchPanel from "../components/SearchPanel";
import './UserPanel.scss';

import api from "../api/API";

// Because POST requests to API are fake, this is based on posts which are in redux store.
// There are posts which loaded after panel render, so when we go back to user list and open
// again, there will be "default" posts again.

function UserPanel() {
  const [user, setUser] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [modal, showModal] = useState(false);

  const storePosts = useSelector(state => state.posts);

  const dispatch = useDispatch();

  const addNewPost = post => {
    dispatch({type: 'ADD_POST', payload: post.params});
    showModal(false);
  };

  const onDeletePost = postId => {
    let deletedPost = storePosts.find(post => post.id === postId);
    dispatch({type: 'DELETE_POST', payload: deletedPost});
  }

  const onAddButtonClick = () => showModal(true);
  const onCloseModal = () => showModal(false);

  const onSearch = inputText => setSearchValue(inputText);

  useEffect(() => {
    const userID = window.location.pathname.split('/').pop();

    api.getUser(userID).then(user => {
      setUser(user);
      dispatch({type: 'SET_USER', payload: user});
    });

    //TODO: api feature, use {userId : userId} instead of string
    api.getPosts(`?userId=${userID}`).then(posts => {
      dispatch({type: 'SET_POSTS', payload: posts});
    });
  }, []);

  return (
    <div className="user-panel">
      <Modal show={modal} onAdd={addNewPost} onClose={onCloseModal}/>
      <SearchPanel onSearch={onSearch} />
      <Header title={user.name} addButton={true} onAddButtonClick={onAddButtonClick}/>
      {
        storePosts && storePosts.map(post => {
          if (!searchValue || post.title.toLowerCase().indexOf(searchValue) !== -1) {
            return <PostCard key={'post-card-' + post.id} title={post.title} postId={post.id} onDelete={onDeletePost}/>
          }
          return null;
        })
      }
    </div>
  );
}

export default UserPanel;