// @ts-nocheck
function App() {
  return (
    <>
      <div className="inline-block max-w-3xl rounded-xl bg-white px-6 py-8">
        <header className="flex items-center justify-between gap-24">
          <div className="block">
            <h1 className="block text-3xl font-bold">Do zrobienia</h1>
            <h2 className="block text-2xl font-bold">2 zadania</h2>
          </div>
          <button className=" aspect-square w-12 cursor-pointer rounded-full border-0 bg-sky-400 text-2xl text-white">
            +
          </button>
        </header>

        {/* <form className="mt-6 flex gap-3">
          <input
            className="w-full rounded border border-solid border-current  p-2"
            type="text"
          />
          <button className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white">
            Dodaj
          </button>
        </form> */}
        <ul className="block">
          <li className="mt-4 flex min-w-[400px] list-none items-center gap-2 border-t border-solid border-black pt-4 ">
            <span className="w-full">Zapłacić rachunki</span>
            <button className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white">
              Zrobione
            </button>
            <button className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white">
              Usuń
            </button>
          </li>
          <li className="mt-4 flex min-w-[400px] list-none items-center gap-2 border-t border-solid border-black pt-4 ">
            <span className="w-full line-through">Wyrzucić śmieci</span>
            <button className="cursor-pointer rounded border border-solid border-current px-2 py-1 text-sky-400 transition-all hover:bg-sky-400 hover:text-white">
              Usuń
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;

/* POTRZEBNE KOMPONENTY
1. TODO_LIST
2. TODO_ITEM
3. BUTTON
4. HEADER (ile zadań)
5. ADD FORM
 */
