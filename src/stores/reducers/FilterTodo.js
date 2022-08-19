const initialState = {
  search: "",
  status: "all",
  priority: "low",
};
const filterTodo = (state = initialState, action) => {
  switch (action.type) {
    case "filter/inputSearch":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export { filterTodo };
