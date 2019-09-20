import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Landing/Register";
// import Login from "./components/Landing/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          {/* <Route path="/signup" component={SignUp} /> */}
          <Route path="/register" component={Register} />
          {/* <Route path="/register" component={Login} /> */}
          {/* <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
