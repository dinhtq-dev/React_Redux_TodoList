const initialState = [
  {
    id: "5bfbb60a-85ed-453f-9157-b26ab0b38dca",
    name: "Di choi",
    priority: "low",
    completed: true,
  },
  {
    id: "bb59a24e-1ff3-4653-9431-4dd69f2b29f8",
    name: "Danh bong",
    priority: "medium",
    completed: false,
  },
  {
    id: "06ca975c-798c-4c93-ac43-cbabced7bf58",
    name: "cau long",
    priority: "high",
    completed: false,
  },
  {
    id: "540e1eb6-806e-464f-a891-09c7b48cfbe2",
    name: "bong ban",
    priority: "medium",
    completed: false,
  },
];
const listTodo = (state = initialState, action) => {
  switch (action.type) {
    case "listTodo/addTodo":
      return [...state, action.payload];
    case "listTodo/deleteItem":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
};

export { listTodo };
