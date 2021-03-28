import { useState, useEffect } from 'react';
import Header from "../components/Header";
import './PostPanel.css';

function PostPanel() {
  const [user, setUser] = useState({});
  const [post, setPost] = useState({title: '', body: ''});

  useEffect(() => {
    const postID = window.location.pathname.split('/').pop();

    fetch('https://my-json-server.typicode.com/3Milo/database/posts/' + postID)
      .then(response => response.json())
      .then(data => {
        setPost({title: data.title, body: data.body});
        getUser(data.user_id);
      });
  }, []);

  const getUser = id => {
    fetch('https://my-json-server.typicode.com/3Milo/database/users/' + id)
      .then(response => response.json())
      .then(data => setUser(data));
  };

  return (
    <div className="post-panel">
      <Header title={user.name} />
    </div>
  );
}

export default PostPanel;