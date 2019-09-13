import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './components/Landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route path="/signup" component={SignUp} /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
