import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import TodoItem from './TodoItem';

function App(): ReactNode {
  const [todos, setTodos] = useState([
    { _id: 'abcdef1234', title: 'ABC', completed: false },
    { _id: 'dngudtub45', title: 'DEF', completed: true },
    { _id: 'dfgfg35335', title: 'XYZ', completed: false },
  ]);
  const editingId = 'dfgfg35335';

  const [newTodo, setNewTodo] = useState('ABC');

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTodos([
      ...todos,
      { _id: Math.random().toString(), title: newTodo, completed: false },
    ]);
  }

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    setTodos(
      todos.map((todo) =>
        todo.completed !== event.target.checked
          ? { ...todo, completed: event.target.checked }
          : todo,
      ),
    );
  }

  return (
    <div className="App">
      <form className="todos-form" onSubmit={handleSubmit}>
        <input
          type="checkbox"
          className="todos-toggle-checked"
          onChange={handleCheckboxChange}
        />
        <input
          type="text"
          value={newTodo}
          className="todos-new-input"
          onChange={handleTextChange}
        />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            isEditing={todo._id === editingId}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// <TodoItem key={todo._id} todo={todo} isEditing={todo._id === editingId} />
// React.createElement(TodoItem, {
//  key: todo._id,
//  todo: todo,
//  isEditing: todo._id === editingId,
// });
