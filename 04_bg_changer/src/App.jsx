import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className="w-full h-screen px-5 py-5"
        style={{ backgroundColor: color }}
      >
        <div className="fixed bottom-12 w-full">
          <div className="bg-white px-3 py-2 w-full h-auto mx-auto max-w-3xl rounded-xl flex justify-center space-x-4 flex-wrap text-xl">
            <button
              onClick={() => setColor("green")}
              className="text-white font-bold px-3 py-2 rounded-lg cursor-pointer bg-green-500"
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="text-white font-bold px-3 py-2 rounded-lg cursor-pointer bg-blue-500"
            >
              blue
            </button>
            <button
              onClick={() => setColor("pink")}
              className="text-white font-bold px-3 py-2 rounded-lg cursor-pointer bg-pink-400"
            >
              Pink
            </button>
            <button
              onClick={() => setColor("orange")}
              className="text-white font-bold px-3 py-2 rounded-lg cursor-pointer bg-orange-500"
            >
              Orange
            </button>
            <button
              onClick={() => setColor("black")}
              className="text-white font-bold px-3 py-2 rounded-lg cursor-pointer bg-brown-500 bg-black"
            >
              Black
            </button>
            <button
              onClick={() => setColor("purple")}
              className="text-white font-bold px-3 py-2 rounded-lg cursor-pointer bg-brown-500 bg-purple-500"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
