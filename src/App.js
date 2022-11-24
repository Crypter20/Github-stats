import React from "react";
import Search from "./components/SearchPage/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" component={Search} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
