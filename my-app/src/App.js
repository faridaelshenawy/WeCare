import React from 'react';

import './App.css';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home.js";
import Login from './Login.js';
function App() {
  return (
    
      <Router>
          <div className="App">
            
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;
