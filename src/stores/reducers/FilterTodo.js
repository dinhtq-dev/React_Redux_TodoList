const initialState = {
  search: "",
  status: "all",
  priority: "",
};
const filterTodo = (state = initialState, action) => {
  switch (action.type) {
    case "filter/searchFilter":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export { filterTodo };
