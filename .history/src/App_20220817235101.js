import "./App.css";

import React, { useId } from "react";

// import Header from "./components/Header";

const App = () => {
  const id = useId();
  return (
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
            id={id}
            name="customRadioInline1"
            className="custom-control-input mr-5"
          />
          <label className="custom-control-label" htmlFor={id}>
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

      <select className="form-select mb-4" aria-label="Default select example">
        <option value="1">Medium</option>
        <option value="2">High</option>
        <option value="3">Low</option>
      </select>

      <h2>List Todo</h2>

      <ul class="list-group">
        <li class="list-group-item">
          Some content goes here<span class="badge">1</span>
        </li>
        <li class="list-group-item">
          Some content goes here<span class="badge">2</span>
        </li>
        <li class="list-group-item">
          Some content goes here<span class="badge">3</span>
        </li>
        <li class="list-group-item">
          Some content goes here<span class="badge">4</span>
        </li>
      </ul>

      <div className="mt-5 ">
        <form className="form-inline d-flex gap-3">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Todo"
            aria-label="Search"
          />
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ width: "150px" }}
          >
            <option value="1">Medium</option>
            <option value="2">High</option>
            <option value="3">Low</option>
          </select>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
