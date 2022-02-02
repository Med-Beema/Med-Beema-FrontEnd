import React from "react";
import PolicyHolderForm from "./components/policyholderform/PolicyHolderForm";
import ClaimAccess from "./components/claimaccess/ClaimAccessForm";
import Dashboard from "./components/layout/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Deposit from "./components/deposit/deposit";

import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      {/* <Topbar />
      <Sidebar />
       */}
      {/* <Deposit /> */}
      {/* <PolicyHolderForm /> */}
      <Dashboard />
      <Router>
        <Switch>
          <Route path="/policyform" component={PolicyHolderForm}></Route>
          <Route path="/claimaccess" component={ClaimAccess}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
