// @ts-nocheck
export function Header({ numberOfTasks, openForm, isBtnVisible }) {
  return (
    <header className="flex items-center justify-between gap-24">
      <div className="block">
        <h1 className="block text-3xl font-bold">Do zrobienia</h1>
        <h2 className="block text-2xl font-bold">
          {numberOfTasks > 0 ? `${numberOfTasks} zadania` : "Brak zadań"}
        </h2>
      </div>
      {isBtnVisible && (
        <button
          onClick={openForm}
          className=" aspect-square w-12 cursor-pointer rounded-full border-0 bg-sky-400 text-2xl text-white"
        >
          +
        </button>
      )}
    </header>
  );
}
