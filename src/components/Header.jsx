import { getSubheading } from "../utils/getSubheading";
export function Header({ numberOfTasks, isFormOpen, isBtnVisible }) {
  return (
    <header className="flex items-center justify-between gap-24">
      <div className="block">
        <h1 className="block text-3xl font-bold">Do zrobienia</h1>
        <h2 className="block text-2xl font-bold">
          {getSubheading(numberOfTasks)}
        </h2>
      </div>
      {isBtnVisible && (
        <button
          onClick={isFormOpen}
          className=" aspect-square w-12 cursor-pointer rounded-full border-0 bg-sky-400 text-2xl text-white"
        >
          +
        </button>
      )}
    </header>
  );
}
