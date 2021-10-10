import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
       
        <Switch>
          <Route path="/" component={ Home } exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
