import { useReducer } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { appReducer } from "./reducer/appReducer";
import { DragDropContext } from "react-beautiful-dnd";

const initialTODOs = [
  { text: "Zapłacić rachunki", done: false, id: crypto.randomUUID() },
  { text: "Wyrzucić śmieci", done: true, id: crypto.randomUUID() },
  { text: "Wypić dwie szklanki wody", done: true, id: crypto.randomUUID() },
];

function App() {
  const [{ todos, isFormOpen }, dispatch] = useReducer(appReducer, {
    todos: initialTODOs,
    isFormOpen: false,
  });

  function handleDragEnd(result) {
    const { source, destination } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const updatedTodos = [...todos];
    const [reorderedItem] = updatedTodos.splice(source.index, 1);
    updatedTodos.splice(destination.index, 0, reorderedItem);
    dispatch({ type: "drag", todos: updatedTodos });
  }

  return (
    <>
      <div className="inline-block max-w-3xl rounded-xl bg-white px-6 py-8">
        <Header
          isBtnVisible={!isFormOpen}
          isFormOpen={() => dispatch({ type: "open_form" })}
          numberOfTasks={todos.length}
        />
        {isFormOpen && (
          <Form onAddTodo={(text) => dispatch({ type: "add", text })} />
        )}
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            onDeleteTodo={(id) => dispatch({ type: "delete", id })}
            onDoneTodo={(id) => dispatch({ type: "done", id })}
            onEditTodo={(text, id) => dispatch({ type: "edit", id, text })}
            todos={todos}
          />
        </DragDropContext>
      </div>
    </>
  );
}

export default App;
