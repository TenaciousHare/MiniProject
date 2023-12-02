import { TodoItem } from "./TodoItem";
import { Draggable, Droppable } from "react-beautiful-dnd";
export function TodoList({ todos, onDeleteTodo, onDoneTodo, onEditTodo }) {
  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <ul
          className="block"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {todos.map(({ text, done, id }, index) => (
            <Draggable key={id} draggableId={id} index={index}>
              {(provided) => (
                <TodoItem
                  innerRef={provided.innerRef}
                  dragHandleProps={{ ...provided.dragHandleProps }}
                  draggableProps={{ ...provided.draggableProps }}
                  id={id}
                  text={text}
                  done={done}
                  onDeleteTodo={onDeleteTodo}
                  onDoneTodo={onDoneTodo}
                  onEditTodo={onEditTodo}
                />
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
