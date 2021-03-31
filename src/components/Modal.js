import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Modal.scss';

import api from "../api/API";

function Modal(props) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const currentUser = useSelector(state => state.user);

  if (!props.show) {
    return null;
  }

  const onTitleChange = e => setTitle(e.target.value);

  const onBodyChange = e => setBody(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    if (!title.trim()) {
      return alert('Post title is required.');
    }

    if (!body.trim()) {
      return alert('Post body is required.')
    }

    api.post('/posts', {
      params: {
        userId: currentUser.id,
        title: title,
        body: body
      }
    })
    .then(post => {
      props.onAdd(post);
      setTitle('');
      setBody('');
    });
  };

  const onClose = () => {
    props.onClose();
    setTitle('');
    setBody('');
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content__header">
          <b>Add new post</b>
        </div>
        <div className="modal__content__body">
          <form onSubmit={onSubmit}>
            <label>
              Title:
              <input type="text" value={title} onChange={onTitleChange} />
            </label>
            <label>
              Body:
              <textarea value={body} onChange={onBodyChange} ></textarea>
            </label>
            <input type="submit" value="Send" />
            <button onClick={onClose}>Close</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;