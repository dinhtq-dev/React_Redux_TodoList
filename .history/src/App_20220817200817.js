import "./App.css";

import React from "react";
import Header from "./components/Header";

const App = () => (
  <div className="row container ml-5 ">
    <Header></Header>
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>

        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
    </form>
  </div>
);

export default App;
