const TodoItem: React.FC<{
  text: string;
  onDeleteTodo: () => void;
}> = (props) => {
  

  return (
    <>
      <li>{props.text}</li>
      <button onClick={props.onDeleteTodo}>삭제</button>
    </>
  );
};

export default TodoItem;
