import { createStore } from 'redux';

const initialState = {
  user: null,
  posts: [],
  comments: []
};

const reducer =  (state = initialState, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.payload
    }
  }
  if (action.type === 'SET_POSTS') {
    return {
      ...state,
      posts: action.payload
    }
  }
  if (action.type === 'SET_COMMENTS') {
    return {
      ...state,
      comments: action.payload
    }
  }
  if (action.type === 'ADD_POST') {
    return {
      ...state,
      posts: state.posts.concat(action.payload)
    }
  }
  if (action.type === 'DELETE_POST') {
    return {
      ...state,
      posts: state.posts.filter(post => post.id !== action.payload.id)
    }
  }
  return state;
};


const store = createStore(reducer);

export default store;