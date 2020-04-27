import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 
'react-router-dom'
import Navbar from '../src/components/layout/Navbar'
import './App.css';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />  
      </Fragment>
    </Router>
  );
};

export default App;
