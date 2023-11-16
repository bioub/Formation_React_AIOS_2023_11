import { Todo } from "./Todo";

export interface TodoJSONPlaceholder {
  userId:    number;
  id:        number;
  title:     string;
  completed: boolean;
}

export async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data
    .slice(0, 20)
    .map((t: TodoJSONPlaceholder) => ({
      _id: String(t.id),
      title: t.title,
      completed: t.completed,
    }));
}