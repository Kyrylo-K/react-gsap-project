import React, { Component } from 'react';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './components/home';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;