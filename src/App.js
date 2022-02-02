import React from "react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/layout/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
