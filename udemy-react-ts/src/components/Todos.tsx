import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; onDeleteTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={props.onDeleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
