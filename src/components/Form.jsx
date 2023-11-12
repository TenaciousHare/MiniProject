// @ts-nocheck
import { useState } from "react";
export function Form({ onAddTodo, onOpenForm }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const text = inputValue;
    const id = crypto.randomUUID();

    onAddTodo(text, id);
    onOpenForm();

    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex gap-3">
      <input
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
        value={inputValue}
        className="w-full rounded border border-solid border-current  p-2"
        type="text"
      />
      <button
        type="submit"
        disabled={inputValue === ""}
        className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white disabled:bg-gray-400 disabled:text-white disabled:opacity-75"
      >
        Dodaj
      </button>
    </form>
  );
}
