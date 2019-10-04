import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Landing/Register";
import Login from "./components/Landing/Login";
import "./App.css";
import Navbar from "./components/Navbar";
import UnderConstruction from "./components/UnderConstruction";
import VerifyExpenses from "./components/Breakeven/BankTypesTable";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Dashboard />} />
          <Route exact path="/verifyexpenses" component={VerifyExpenses} />
          {/* <Route path="/signup" component={SignUp} /> */}
          <Route path="/register" component={Register} />
          <Route path="/login" component={() => <Login />} />
          <Route path="/construction" component={UnderConstruction} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
