import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PostCard from "../components/PostCard";
import Header from "../components/Header";
import './UserPanel.css';

function UserPanel() {
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const userID = window.location.pathname.split('/').pop();

    fetch('https://my-json-server.typicode.com/3Milo/database/users/' + userID)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        dispatch({type: 'SET_USER_NAME', payload: data.name});
      });

    fetch('https://my-json-server.typicode.com/3Milo/database/posts?user_id=' + userID)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="user-panel">
      <Header />
      {
        posts.map(post => <PostCard key={'post-card-' + post.id} title={post.title} />)
      }
    </div>
  );
}

export default UserPanel;