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
            onAddTodo={(text, id) =>
              setTodos((prevState) => {
                return [...prevState, { text, id, done: false }];
              })
            }
          />
        )}
        <TodoList todos={todos} />
      </div>
    </>
  );
}

export default App;
