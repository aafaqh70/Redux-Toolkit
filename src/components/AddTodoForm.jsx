import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [task, setTask] = useState("");

  const dipatch = useDispatch();

  const onChangeHandler = (event) => {
    setTask(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dipatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="text" value={task} onChange={onChangeHandler} />
        <br />
        <br />
        <button>ADD TASK</button>
      </form>
    </>
  );
}
