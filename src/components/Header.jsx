// @ts-nocheck
export function Header({ numberOfTasks, onOpenForm, isBtnVisible }) {
  return (
    <header className="flex items-center justify-between gap-24">
      <div className="block">
        <h1 className="block text-3xl font-bold">Do zrobienia</h1>
        <h2 className="block text-2xl font-bold">{numberOfTasks} zadania</h2>
      </div>
      {/*ADD TODO FORM TRIGGER BTN*/}
      {isBtnVisible && (
        <button
          onClick={onOpenForm}
          className=" aspect-square w-12 cursor-pointer rounded-full border-0 bg-sky-400 text-2xl text-white"
        >
          +
        </button>
      )}
    </header>
  );
}
