import { Provider } from "react-redux";
import "./App.css";
import Todo from "./components/todo";
import { store } from "./app/store";
import AddTodo from "./components/AddTodoForm";

function App() {
  return (
    <>
      <Provider store={store}>
        <AddTodo />
        <Todo />
      </Provider>
    </>
  );
}

export default App;
