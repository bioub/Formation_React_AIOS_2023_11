import {  ChangeEvent, ReactNode, useState } from "react";
import TodoItem from "./TodoItem";


function App(): ReactNode {
  const todos = [
    { _id: 'abcdef1234', title: 'ABC', completed: false },
    { _id: 'dngudtub45', title: 'DEF', completed: true },
    { _id: 'dfgfg35335', title: 'XYZ', completed: false },
  ];
  const editingId = 'dfgfg35335';


  const [saisie, setSaisie]  = useState('ABC');
  // useState();
  // useState();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    // console.log('Saisie : ', event.currentTarget.value);
    setSaisie(event.currentTarget.value);
    console.log(saisie);
    
  }

  return (
    <div className="App">
      <p>Saisie : {saisie}</p>
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" value={saisie} className="todos-new-input" onChange={handleChange} />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => <TodoItem key={todo._id} todo={todo} isEditing={todo._id === editingId} />)}
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