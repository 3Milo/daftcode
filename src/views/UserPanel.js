import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import Modal from "../components/Modal";
import './UserPanel.css';

import api from "../api/API";

function UserPanel() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  const postsCount = useSelector(state => state.postsCount);

  const userID = window.location.pathname.split('/').pop();

  useEffect(() => {
    api.getUser(userID).then(data => setUser(data));
  }, []);

  useEffect(() => {
    console.log('tttttttttt');

    //TODO: use {userId : userId} instead of string
    api.getPosts(`?userId=${userID}`).then(data => setPosts(data));
  }, [postsCount]);

  return (
    <div className="user-panel">
      <Modal show={false} />
      <Header title={user.name} addButton={true}/>
      {
        posts.map(post => <PostCard key={'post-card-' + post.id} title={post.title} postId={post.id} />)
      }
    </div>
  );
}

export default UserPanel;