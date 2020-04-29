import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 
'react-router-dom'
import Navbar from '../src/components/layout/Navbar'
import './App.css';
import Home from '../src/components/pages/Home'
import About from '../src/components/pages/About'
import ContactState from '../context/contact/ContactState'

const App = () => {
  return (
    <ContactState>
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
    </ContactState>
  );
};

export default App;

//NEXT YOU ARE WIRING UP SOME NAV LINKS