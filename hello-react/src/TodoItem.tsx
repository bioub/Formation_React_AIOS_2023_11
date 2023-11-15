import { ReactNode } from 'react';
import TodoSpanValue from './TodoSpanValue';
import { Todo } from './Todo';
import TodoInputValue from './TodoInputValue';

type Props = Readonly<{
  todo: Todo;
  isEditing?: boolean;
  onTodoEdit(todo: Todo): void;
}>;

function TodoItem({ todo, isEditing, onTodoEdit }: Props): ReactNode {
  return (
    <div className="todosItem" data-todo-id={todo._id}>
      <input
        type="checkbox"
        className="todosCompleted"
        checked={todo.completed}
        onChange={(e) => onTodoEdit({...todo, completed: e.target.checked})}
      />
      {isEditing ? (
        <TodoInputValue value={todo.title} />
      ) : (
        <TodoSpanValue value={todo.title} className="TodoSpanValue" />
      )}
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
