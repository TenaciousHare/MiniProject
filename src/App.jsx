// @ts-nocheck
import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

const initialTODOs = [
  { text: "Zapłacić rachunki", done: false, id: crypto.randomUUID() },
  { text: "Wyrzucić śmieci", done: true, id: crypto.randomUUID() },
  { text: "Wypić dwie szklanki wody", done: true, id: crypto.randomUUID() },
];

function App() {
  const [openForm, setOpenForm] = useState(false);
  const [todos, setTodos] = useState(initialTODOs);

  function handleAddTodo(text, id) {
    setTodos((prevState) => {
      return [...prevState, { text, id, done: false }];
    });
  }

  function handleDeleteTodo(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function handleDoneTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function handleEditTodo(text, id) {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: text };
      }
      return todo;
    });
    setTodos(editedTodos);
  }

  return (
    <>
      <div className="inline-block max-w-3xl rounded-xl bg-white px-6 py-8">
        <Header
          isBtnVisible={!openForm}
          onOpenForm={() => setOpenForm((prevState) => !prevState)}
          numberOfTasks={todos.length}
        />
        {openForm && (
          <Form
            onOpenForm={() => setOpenForm((prevState) => !prevState)}
            onAddTodo={handleAddTodo}
          />
        )}
        <TodoList
          onDeleteTodo={handleDeleteTodo}
          onDoneTodo={handleDoneTodo}
          onEditTodo={handleEditTodo}
          todos={todos}
        />
      </div>
    </>
  );
}

export default App;
