import React, { useState } from "react";
import { Home } from "./Components/Home";
import { ParseExcel } from "./Components/ParseExcel";

function App() {
  return (
    <div className="App">
      <Home />
      <ParseExcel />
    </div>
  );
}

export default App;
