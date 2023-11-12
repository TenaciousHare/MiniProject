export function getSubheading(numberOfTodos) {
  switch (true) {
    case numberOfTodos > 4:
      return `${numberOfTodos} zadań`;
    case numberOfTodos > 1:
      return `${numberOfTodos} zadania`;
    case numberOfTodos === 1:
      return "1 zadanie";
    case numberOfTodos === 0:
    default:
      return "Brak zadań";
  }
}
