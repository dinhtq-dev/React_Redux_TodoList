import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchInputFilterList } from "../stores/actions";
const FilterTodo = () => {
  const dispatch = useDispatch();
  const [inputSearch, setInputSearch] = useState("");
  const [selectPriority, setSelectPriority] = useState("low");
  const [inputText, setInputText] = useState("");

  const handleValueChange = (setState, event) => {
    event.preventDefault();
    setState(event.target.value);
  };

  const handleInputSearchChange = (event) => {
    setInputSearch(event.target.value);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    dispatch(searchInputFilterList(inputSearch));
  };

  return (
    <>
      <form className="form-inline d-flex gap-3">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={handleInputSearchChange}
          value={inputSearch}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={handleSearchButtonClick}
        >
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
          <label
            className="custom-control-label"
            htmlFor="customRadioInline1"
            value="all"
          >
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
          <label className="custom-control-label" htmlFor="customRadioInline2">
            Completed
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline d-flex gap-2">
          <input
            type="radio"
            id="customRadioInline3"
            name="customRadioInline1"
            className="custom-control-input mr-5"
            value={inputText}
            onChange={(event) => handleValueChange(setInputText, event)}
          />
          <label className="custom-control-label" htmlFor="customRadioInline3">
            Todo
          </label>
        </div>
      </div>

      <select
        className="form-select mb-4"
        aria-label="Default select example"
        onChange={(event) => handleValueChange(setSelectPriority, event)}
        value={selectPriority}
      >
        <option value="medium">Medium</option>
        <option value="high">High</option>
        <option value="low">Low</option>
      </select>
    </>
  );
};

export default FilterTodo;
