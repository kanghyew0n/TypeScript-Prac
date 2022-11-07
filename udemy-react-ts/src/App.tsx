import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHndler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const deleteTodoHandler = (id: string) => {
    // const filteredTodos : Todo[] = todos.filter((todo) => todo.id !== id)
    // setTodos(filteredTodos)
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };  

  return (
    <div>
      <NewTodo onAddTodo={addTodoHndler} />
      <Todos items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
