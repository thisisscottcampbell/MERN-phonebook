import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 
'react-router-dom'
import Navbar from '../src/components/layout/Navbar'
import './App.css';
import Home from '../src/components/pages/Home'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar /> 
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div> 
      </Fragment>
    </Router>
  );
};

export default App;
