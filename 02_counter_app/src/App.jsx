import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  const minus = () => {
    if (count <= 0) {
      return;
    }
    setCount((prev) => prev - 1);
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>This is Counter App</h1>
      <h3>Count is {count}</h3>
      <div>
        <button type="button" onClick={plus}>
          Add
        </button>
        <button type="button" onClick={minus}>
          Subtract
        </button>
        <br />
        <p>count: {count}</p>
      </div>
    </>
  );
}

export default App;