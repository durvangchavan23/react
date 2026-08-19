import { useContext, useState } from "react";
import UserContext from "../context/userContext";

function Login() {
  const { setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!username || !password) {
      return;
    }

    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="bg-gray-500 px-10 py-10 rounded-lg">
      <h1 className="text-center font-bold text-3xl text-white">Context Login</h1>
      <div className="space-x-3 mt-5 flex justify-between items-center">
        <label htmlFor="name" className="text-white font-bold text-lg">
          Name:
        </label>
        <input
          type="text"
          value={username}
          id="name"
          className="border-2 border-white px-3 py-2 outline-none text-white font-bold rounded-xl"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name here"
        />
      </div>
      <div className="space-x-3 mt-5 flex justify-between items-center">
        <label htmlFor="password" className="text-white font-bold text-lg">
          Password:
        </label>
        <input
          type="text"
          value={password}
          id="password"
          className="border-2 border-white px-3 py-2 outline-none text-white font-bold rounded-xl"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password here"
        />
      </div>
      <button
        type="submit"
        className="w-full min-w-sm mt-5 cursor-pointer hover:bg-white hover:text-gray-400 duration-200 mx-auto text-white text-lg font-bold border-2 rounded-xl py-2"
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
