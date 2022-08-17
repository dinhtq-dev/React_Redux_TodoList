import "./App.css";

import React from "react";
// import Header from "./components/Header";

const App = () => (
  <div className="container mt-5">
    <div className="row text-center">
      <h1>TODO APP REACT REDUX</h1>
    </div>
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </div>
  </div>
);

export default App;
