//@ts-nocheck
export function TodoItem({ text, done, id, onDoneTodo, onDeleteTodo }) {
  function handleDoneClick() {
    onDoneTodo(id);
  }

  function handleDeleteClick() {
    onDeleteTodo(id);
  }

  return (
    <li className="mt-4 flex min-w-[400px] list-none items-center gap-2 border-t border-solid border-black pt-4 ">
      <span className={`w-full ${done ? "line-through" : ""}`}>{text}</span>
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
