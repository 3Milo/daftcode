import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from "../components/Header";
import CommentCard from "../components/CommentCard";
import './PostPanel.css';

import api from "../api/API";

function PostPanel() {
  const [showComments, setShowComments] = useState(true);
  const [buttonText, setButtonText] = useState('Hide comments');
  const [userName, setUserName] = useState('');
  const [post, setPost] = useState({title: '', body: ''});
  const [comments, setComments] = useState([]);

  const postID = window.location.pathname.split('/').pop();

  const dispatch = useDispatch();

  const commentsCount = useSelector(state => state.commentsCount);

  const toggleComments = () => {
    setShowComments(!showComments);
    setButtonText(!showComments ? 'Hide comments' : 'Show comments');
  };

  useEffect(() => {
    api.getPost(postID)
      .then(post => {
        setPost(post);
        return post;
      })
      .then(post => api.getUser(post.userId))
      .then(user => setUserName(user.name));
  }, []);

  useEffect(() => {
    console.log('tttttttttt');

    //TODO: use params object instead of string
    api.getComments(`?postId=${postID}`).then(data => setComments(data));
  }, [commentsCount]);

  return (
    <div className="post-panel">
      <Header title={userName} />
      <div className="post-panel__post">
        <span className="post-panel__title">
          {post.title}
        </span>
        <span className="post-panel__body">
          {post.body}
        </span>
      </div>
      <div className="post-panel__buttons">
        <span onClick={toggleComments}>{buttonText}</span>
        <span>Add comment</span>
      </div>
      <div className="post-panel__comments">
      {showComments &&
        comments.map(comment => <CommentCard key={'comment-card-' + comment.id} />)
      }
      </div>
    </div>
  );
}

export default PostPanel;