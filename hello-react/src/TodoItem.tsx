import { ReactNode } from "react";
import TodoSpanValue from "./TodoSpanValue";

function TodoItem(): ReactNode {
  return (
    <div className="todosItem" data-todo-id="1234">
      <input type="checkbox" className="todosCompleted" checked={true} />
      <TodoSpanValue />
      <button className="todosDeleteBtn">-</button>
    </div>
  )
}

export default TodoItem;