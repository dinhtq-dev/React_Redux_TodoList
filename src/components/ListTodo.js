import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, deleteTodoItem } from "../stores/actions";
import { v4 as uuIdv4 } from "uuid";
import { getListTodo } from "../stores/selecters";

const ListTodo = () => {
  const dispatch = useDispatch();
  const listTodo = useSelector((state) => getListTodo(state));

  const [inputText, setInputText] = useState("");
  const [selectPriority, setSelectPriority] = useState("low");

  const handleSelectChange = (setState, event) => {
    event.preventDefault();
    setState(event.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputText) return alert("Please input todo");
    dispatch(
      addTodoAction({
        id: uuIdv4(),
        name: inputText,
        priority: selectPriority,
        completed: false,
      })
    );
    setInputText("");
    setSelectPriority("low");
  };

  const handleDeleteTodo = (item) => dispatch(deleteTodoItem(item));

  const checkClassName = (priority) => {
    const className = {
      high: "btn btn-outline-danger",
      low: "btn btn-outline-secondary",
      medium: "btn btn-outline-primary",
    };
    return className[priority];
  };
  return (
    <>
      <h2>List Todo</h2>
      <ul
        className="list-group"
        style={{ maxHeight: "350px", overflow: "auto", minHeight: "200px" }}
      >
        {listTodo.map((item) => {
          return (
            <li
              className="list-group-item d-flex justify-content-between"
              key={uuIdv4()}
            >
              <p> {item.name}</p>
              <div className="d-flex gap-3">
                <button type="button" className={checkClassName(item.priority)}>
                  {item.priority}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDeleteTodo(item)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-5 ">
        <form className="form-inline d-flex gap-3">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Todo"
            aria-label="Search"
            value={inputText}
            onChange={(event) => handleSelectChange(setInputText, event)}
          />
          <select
            className="form-select"
            aria-label="Default select example"
            style={{ width: "150px" }}
            onChange={(event) => handleSelectChange(setSelectPriority, event)}
            value={selectPriority}
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
