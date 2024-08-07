import { useDispatch, useSelector } from "react-redux";
import { DeleteTodo } from "../features/todo/todoSlice";
import { MarkasDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(DeleteTodo(id));
  };

  const markDoneHandler = (id) => {
    dispatch(MarkasDone(id));
  };

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "",
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteHandler(todo.id)}>Delete</button>
            <button onClick={() => markDoneHandler(todo.id)}>
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
