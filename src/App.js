import React, { Component } from 'react';
import { history } from './helpers/history';
import './App.css';

import { Router, Route, Switch } from 'react-router-dom';
import { HeaderNav } from './components/NavHeader'
import Home from './components/Home'
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import NoSidebar from './components/NoSidebar';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <div>
            <HeaderNav/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/leftSidebar" component={LeftSidebar} />
              <Route path="/rightSidebar" component={RightSidebar} />
              <Route path="/noSidebar" component={NoSidebar} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
