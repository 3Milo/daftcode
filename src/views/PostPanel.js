import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from "../components/Header";
import CommentCard from "../components/CommentCard";
import SearchPanel from "../components/SearchPanel";
import './PostPanel.scss';

import api from "../api/API";

function PostPanel() {
  const [commentList, showCommentList] = useState(true);
  const [post, setPost] = useState({title: '', body: ''});
  const [comments, setComments] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const currentUser = useSelector(state => state.user);

  const dispatch = useDispatch();

  const toggleComments = () => showCommentList(!commentList);

  const onSearch = inputText => {
    setSearchValue(inputText);
  };

  useEffect(() => {
    const postID = window.location.pathname.split('/').pop();

    api.getPost(postID).then(post => {
      setPost(post);
      if (!currentUser) {
        api.getUser(post.userId)
        .then(user => dispatch({type: 'SET_USER', payload: user}));
      }
    });

    api.getComments(`?postId=${postID}`).then(data => setComments(data));

  }, []);

  return (
    <div className="post-panel">
      <SearchPanel onSearch={onSearch} />
      <Header title={currentUser && currentUser.name} />
      <div className="post-panel__post">
        <span className="post-panel__title">
          {post.title}
        </span>
        <span className="post-panel__body">
          {post.body}
        </span>
      </div>
      <div className="post-panel__buttons">
        <span onClick={toggleComments}>{commentList ? 'Hide comments' : 'Show comments'}</span>
        <span>Add comment</span>
      </div>
      <div className="post-panel__comments">
      {commentList &&
        comments.map(comment => {
          if (!searchValue || comment.body.toLowerCase().indexOf(searchValue) !== -1) {
            return <CommentCard key={'comment-card-' + comment.id} name={comment.name} email={comment.email} body={comment.body} />
          }
          return null;
        })
      }
      </div>
    </div>
  );
}

export default PostPanel;