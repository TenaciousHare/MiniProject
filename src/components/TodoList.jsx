//@ts-nocheck
import { TodoItem } from "./TodoItem";
export function TodoList({ todos }) {
  return (
    <ul className="block">
      {todos.map(({ text, done, id }) => (
        <TodoItem key={id} id={id} text={text} done={done} />
      ))}
    </ul>
  );
}
