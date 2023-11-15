import { ChangeEvent, FormEvent, ReactNode, useState } from 'react';
import TodoItem from './TodoItem';
import { Todo } from './Todo';
/*
import { useImmer } from 'use-immer';

function App(): ReactNode {
  const [todos, setTodos] = useImmer([
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
    // setTodos([
    //   ...todos,
    //   { _id: Math.random().toString(), title: newTodo, completed: false },
    // ]);
    setTodos((draft) => {
      draft.push({
        _id: Math.random().toString(),
        title: newTodo,
        completed: false,
      });
    });
  }

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.completed !== event.target.checked
    //       ? { ...todo, completed: event.target.checked }
    //       : todo,
    //   ),
    // );
    setTodos((draft) => {
      const todosToCheck = draft.filter(
        (t) => t.completed !== event.target.checked,
      );
      for (const todo of todosToCheck) {
        todo.completed = event.target.checked;
      }
    });
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
*/


function App(): ReactNode {
  const [todos, setTodos] = useState<Todo[]>([
    { _id: 'abcdef1234', title: 'ABC', completed: false },
    { _id: 'dngudtub45', title: 'DEF', completed: true },
    { _id: 'dfgfg35335', title: 'XYZ', completed: false },
  ]);
  const [editingId, setEditingId] = useState('dfgfg35335');

  const [newTodo, setNewTodo] = useState('ABC');

  function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.currentTarget.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setTodos([
      ...todos,
      { _id: Math.random().toString(), title: newTodo, completed: false },
    ]);
  }

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>): void {
    setTodos(
      todos.map((todo) =>
        todo.completed !== event.target.checked
          ? { ...todo, completed: event.target.checked }
          : todo,
      ),
    );
  }

  function handleTodoEdit(todo: Todo): void {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => todo._id === t._id);
    newTodos[index] = todo; // todo est déjà un copie dans TodoItem
    setTodos(newTodos);
  }

  function handleTodoDelete(todo: Todo): void {
    setTodos(todos.filter((t) => t._id !== todo._id));
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
            onTodoEdit={handleTodoEdit}
            onTodoDelete={handleTodoDelete}
            onEditingIdChange={setEditingId}
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
