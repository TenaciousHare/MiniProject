//@ts-nocheck
import { useState } from "react";

export function TodoItem({
  text,
  done,
  id,
  onDoneTodo,
  onDeleteTodo,
  onEditTodo,
}) {
  const [inputValue, setInputValue] = useState(text);
  const [isEdited, setIsEdited] = useState(false);

  function handleDoneClick() {
    onDoneTodo(id);
  }

  function handleDeleteClick() {
    onDeleteTodo(id);
  }

  function handleEditClick() {
    setIsEdited((prevState) => !prevState);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const text = inputValue;
    onEditTodo(text, id);
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
        <form onSubmit={handleSubmit} className=" flex gap-2">
          <input
            onChange={handleInputChange}
            value={inputValue}
            className="w-full rounded border border-solid border-current px-2 py-1"
            type="text"
          />
          <button
            type="submit"
            disabled={inputValue === ""}
            className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white disabled:bg-gray-400 disabled:text-white disabled:opacity-75"
          >
            Zapisz
          </button>
        </form>
      )}
      {!done && (
        <button
          onClick={handleDoneClick}
          className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white"
        >
          Zrobione
        </button>
      )}
      <button
        onClick={handleDeleteClick}
        className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white"
      >
        Usuń
      </button>
    </li>
  );
}
