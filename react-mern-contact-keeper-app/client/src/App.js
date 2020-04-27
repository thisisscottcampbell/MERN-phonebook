import React from 'react';
import { BrowserRouter as Router, Route, Switch }
import Navbar from '../src/components/layout/Navbar'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      hi, i'm app :)
    </div>
  );
};

export default App;
