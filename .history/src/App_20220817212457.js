import "./App.css";

import React from "react";
// import Header from "./components/Header";

const App = () => (
  <div className="container mt-5">
    <div className="row text-center">
      <h1>TODO APP REACT REDUX</h1>
    </div>

    <form className="form-inline d-flex">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>

    <div className="d-flex gap-5 mt-3 mb-3">
      <div className="custom-control custom-radio custom-control-inline d-flex gap-2">
        <input
          type="radio"
          id="customRadioInline1"
          name="customRadioInline1"
          className="custom-control-input mr-5"
        />
        <label className="custom-control-label">All</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline d-flex gap-2">
        <input
          type="radio"
          id="customRadioInline2"
          name="customRadioInline1"
          className="custom-control-input mr-5"
        />
        <label className="custom-control-label">Completed</label>
      </div>
      <div className="custom-control custom-radio custom-control-inline d-flex gap-2">
        <input
          type="radio"
          id="customRadioInline3"
          name="customRadioInline1"
          className="custom-control-input mr-5"
        />
        <label className="custom-control-label">Todo</label>
      </div>
    </div>

    <select className="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <ul className="list-inline">
      <li className="list-inline-item">This is a list item.</li>
      <li className="list-inline-item">And another one.</li>
      <li className="list-inline-item">But they're displayed inline.</li>
    </ul>
  </div>
);

export default App;
