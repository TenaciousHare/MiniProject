export function appReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        isFormOpen: false,
        todos: [
          ...state.todos,
          { text: action.text, id: crypto.randomUUID(), done: false },
        ],
      };
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case "done":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, done: !todo.done };
          }
          return todo;
        }),
      };
    case "edit":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.id) {
            return { ...todo, text: action.text };
          }
          return todo;
        }),
      };
    case "open_form":
      return { ...state, isFormOpen: true };
    default:
      throw new Error("Action not supported!");
  }
}
