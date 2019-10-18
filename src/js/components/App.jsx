import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*
* Components
*/

import List from './List';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={(props) => <List {...props} /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;