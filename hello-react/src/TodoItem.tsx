import { ReactNode } from 'react';
import TodoSpanValue from './TodoSpanValue';
import { Todo } from './Todo';
import TodoInputValue from './TodoInputValue';

type Props = Readonly<{
  todo: Todo;
  isEditing?: boolean;
  onTodoEdit(todo: Todo): void;
  onTodoDelete(todo: Todo): void;
  onEditingIdChange(editingId: string): void;
}>;

function TodoItem({ todo, isEditing, onTodoEdit, onTodoDelete, onEditingIdChange }: Props): ReactNode {
  return (
    <div className="todosItem" data-todo-id={todo._id}>
      <input
        type="checkbox"
        className="todosCompleted"
        checked={todo.completed}
        onChange={(e) => onTodoEdit({...todo, completed: e.target.checked})}
      />
      {isEditing ? (
        <TodoInputValue value={todo.title} onInputChange={(val) => onTodoEdit({...todo, title: val})} onTypeEnter={() => onEditingIdChange('')} />
      ) : (
        <TodoSpanValue onDoubleClick={() => onEditingIdChange(todo._id)} value={todo.title} className="TodoSpanValue" />
      )}
      <button className="todosDeleteBtn" onClick={() => onTodoDelete(todo)}>-</button>
    </div>
  );
}

export default TodoItem;
