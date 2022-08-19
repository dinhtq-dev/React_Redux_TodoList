import "./App.css";

import React from "react";

import FilterTodo from "./components/FilterTodo";
import ListTodo from "./components/ListTodo";

const App = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>TODO APP REACT REDUX</h1>
      </div>
      <FilterTodo />
      <ListTodo />
    </div>
  );
};

export default App;
