import { ReactNode } from "react";
import TodoItem from "./TodoItem";

function App(): ReactNode {
  return (
    <div className="App">
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
        <button>+</button>
      </form>
      <div className="todos-container">
        <TodoItem todo={{ _id: 'abcdfdfg', title: 'ABC' }} />
        <TodoItem todo={{ _id: 'jdifjhbo', title: 'DEF' }} />
        <TodoItem todo={{ _id: 'bgfugufb', title: 'XYZ', completed: true }} />
      </div>
    </div>
  );
}

export default App;
