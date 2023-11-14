import { ReactNode } from "react";
import TodoSpanValue from "./TodoSpanValue";
import { Todo } from "./Todo";

type Props = {
  todo: Todo
};

function TodoItem({ todo }: Props): ReactNode {
  return (
    <div className="todosItem" data-todo-id={todo._id}>
      <input type="checkbox" className="todosCompleted" checked={todo.completed ?? false} />
      <TodoSpanValue value={todo.title} className="TodoSpanValue" />
      <button className="todosDeleteBtn">-</button>
    </div>
  )
}

export default TodoItem;