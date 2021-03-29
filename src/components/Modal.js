import { useState } from 'react';
import './Modal.css';

import api from "../api/API";

function Modal(props) {
  const [title, setTitle] = useState('sss');
  const [message, setMessage] = useState('wwww');

  if (!props.show) {
    return null;
  }

  const onTitleChange = e => {
    setTitle(e.target.value);
  };

  const onMessageChange = e => {
    setMessage(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (!title) {
      return alert('Title is required.');
    }

    if (!message) {
      return alert('Message is required.')
    }

    api.post('/posts', {
      params: {
        user_id: 1,
        title: title,
        body: message
      }
    });
  };

  const onClick = e => {
    if (e.target.className === 'modal') {

    }
  };

  return (
    <div className="modal" onClick={onClick}>
      <div className="modal-content">
        <div className="modal-header">
          <b>Add new post</b>
        </div>
        <div className="modal-body">
          <form onSubmit={onSubmit}>
            <label>
              Title:
              <input type="text" value={title} onChange={onTitleChange} />
            </label>
            <label>
              Message:
              <textarea value={message} onChange={onMessageChange} ></textarea>
            </label>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;