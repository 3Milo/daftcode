const apiURL = 'https://jsonplaceholder.typicode.com';

const headers = {
  'Content-type': 'application/json; charset=UTF-8',
};

const api = {

  fetchData(url, params = {}) {
    params.headers = headers;
    return fetch(url, params).then(res => res.json()).then(data => data);
  },

  get(url) {
    return this.fetchData(apiURL + url);
  },

  post(url, params) {
    return this.fetchData(apiURL + url, {
      method: 'POST',
      body: JSON.stringify(params),
    });
  },

  put(url, params) {
    return this.fetchData(apiURL + url, {
      method: 'PUT',
      body: JSON.stringify(params),
    });
  },

  patch(url, params) {
    return this.fetchData(apiURL + url, {
      method: 'PATCH',
      body: JSON.stringify(params),
    });
  },

  delete(url) {
    return this.fetchData(apiURL + url, { method: 'DELETE' });
  },

  getUsers(params = '') {
    return this.get(`/users/${params}`);
  },

  getUser(id) {
    return this.get(`/users/${id}`);
  },

  getPosts(params = '') {
    return this.get(`/posts/${params}`);
  },

  getPost(id) {
    return this.get(`/posts/${id}`);
  },

  getComments(params = '') {
    return this.get(`/comments/${params}`);
  },

  getComment(id) {
    return this.get(`/comments/${id}`);
  }

};

export default api;