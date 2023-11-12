// @ts-nocheck
import { useState } from "react";

export function EditTodoForm({ onEditTodo, text, id, done, onEditClick }) {
  const [inputValue, setInputValue] = useState(text);
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const text = inputValue;
    onEditTodo(text, id, done);
    onEditClick();
  }
  return (
    <form onSubmit={handleSubmit} className=" flex gap-2">
      <input
        onChange={handleInputChange}
        value={inputValue}
        className="w-full rounded border border-solid border-current px-2 py-1"
        type="text"
      />
      <button
        disabled={inputValue === ""}
        className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white disabled:opacity-75"
      >
        Zapisz
      </button>
    </form>
  );
}
