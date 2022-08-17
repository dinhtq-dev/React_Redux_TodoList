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

    <div className="d-flex gap-5 mt-3 mb-5">
      <div className="custom-control custom-radio custom-control-inline d-flex gap-2">
        <input
          type="radio"
          id="customRadioInline1"
          name="customRadioInline1"
          className="custom-control-input mr-5"
        />
        <label className="custom-control-label" for="customRadioInline1">
          All
        </label>
      </div>
      <div className="custom-control custom-radio custom-control-inline d-flex gap-2">
        <input
          type="radio"
          id="customRadioInline2"
          name="customRadioInline1"
          className="custom-control-input mr-5"
        />
        <label className="custom-control-label" for="customRadioInline2">
          Completed
        </label>
      </div>
      <div className="custom-control custom-radio custom-control-inline d-flex gap-2">
        <input
          type="radio"
          id="customRadioInline3"
          name="customRadioInline1"
          className="custom-control-input mr-5"
        />
        <label className="custom-control-label" for="customRadioInline3">
          Todo
        </label>
      </div>
    </div>

    <div>234234</div>
  </div>
);

export default App;
