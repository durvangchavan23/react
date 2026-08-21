import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [todoToEdit, setTodoToEdit] = useState(null);
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-10 px-10 bg-slate-400">
      <h1 className="text-3xl font-extrabold">Learn about redux toolkit</h1>
      <AddTodo todoToEdit={todoToEdit} setTodoToEdit={setTodoToEdit} />
      <Todos onEdit={setTodoToEdit} />
    </div>
  );
}

export default App;
