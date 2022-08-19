import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../stores/actions";
import { v4 as uuidv4 } from "uuid";
const ListTodo = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [selectPriority, setSelectPriority] = useState("");

  const handleSelectChange = (setState, event) => {
    event.preventDefault();
    setState(event.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    dispatch(
      addTodoAction({
        id: uuidv4(),
        name: inputText,
        priority: selectPriority,
        completed: false,
      })
    );
  };
  return (
    <>
      <h2>List Todo</h2>
      <ul
        className="list-group"
        style={{ maxHeight: "350px", overflow: "auto" }}
      >
        <li className="list-group-item">
          Some content goes here<span className="badge">1</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
        <li className="list-group-item">
          Some content goes here<span className="badge">2</span>
        </li>
      </ul>
      <div className="mt-5 ">
        <form className="form-inline d-flex gap-3">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Todo"
            aria-label="Search"
            onChange={(event) => handleSelectChange(setInputText, event)}
          />
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ width: "150px" }}
            onChange={(event) => handleSelectChange(setSelectPriority, event)}
          >
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={addTodo}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};
export default ListTodo;
