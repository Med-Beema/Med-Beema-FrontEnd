import React from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";
import Design from "./design";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Dashboard />
      </BrowserRouter> */}
      <Design />
    </div>
  );
}

export default App;
