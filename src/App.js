import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UsersList from "./views/UsersList";
import UserPanel from "./views/UserPanel";
import PostPanel from "./views/PostPanel";

import logo from "./images/logo.svg";

import './App.scss';

function App() {
  return (
    <div className="app">
      <img src={logo} className="app__logo" alt="logo"/>
      <div className="app__vector"></div>
      <div className="app__container">
        <Router>
          <Switch>
            <Route path="/posts">
              <PostPanel />
            </Route>
            <Route path="/users">
              <UserPanel />
            </Route>
            <Route path="/">
              <UsersList />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
