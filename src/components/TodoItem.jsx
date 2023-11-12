import { useState } from "react";
import { EditTodoForm } from "./EditTodoForm";

export function TodoItem({
  text,
  done,
  id,
  onDoneTodo,
  onDeleteTodo,
  onEditTodo,
}) {
  const [isEdited, setIsEdited] = useState(false);

  function handleDoneClick() {
    onDoneTodo(id, done);
  }

  function handleDeleteClick() {
    onDeleteTodo(id);
  }

  function handleEditClick() {
    setIsEdited((prevState) => !prevState);
  }

  return (
    <li className="mt-4 flex min-w-[400px] list-none items-center gap-2 border-t border-solid border-black pt-4 ">
      {!isEdited && (
        <span
          onClick={handleEditClick}
          className={`w-full ${done ? "line-through" : ""}`}
        >
          {text}
        </span>
      )}
      {isEdited && (
        <EditTodoForm
          onEditTodo={onEditTodo}
          onEditClick={handleEditClick}
          text={text}
          id={id}
          done={done}
        />
      )}

      <button
        onClick={handleDoneClick}
        className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white"
      >
        {done ? "Cofnij" : "Zrobione"}
      </button>

      <button
        onClick={handleDeleteClick}
        className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white"
      >
        Usuń
      </button>
    </li>
  );
}
