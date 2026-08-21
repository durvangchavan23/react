import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../features/todo/todoSlice";

function AddTodo({ todoToEdit, setTodoToEdit }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.length) return;

    if (todoToEdit) {
      dispatch(editTodo({ id: todoToEdit.id, text: input }));
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
    setTodoToEdit(null);
  };

  useEffect(() => {
    if (todoToEdit) setInput(todoToEdit.text);
  }, [todoToEdit]);

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out max-sm:w-50"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg max-sm:w-30 max-sm:px-0  max-sm:py-2"
      >
        {todoToEdit ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default AddTodo;
