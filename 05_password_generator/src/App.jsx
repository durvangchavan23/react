import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [range, setRange] = useState("10");
  const [password, setPassword] = useState("");
  const [characters, setCharacters] = useState(true);
  const [numbers, setNumbers] = useState(true);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const characterChars = "!@#$%^&*+_";
    const numberChars = "1234567890";

    if (characters) str += characterChars;
    if (numbers) str += numberChars;

    let char = 0;

    for (let i = 1; i <= range; i++) {
      char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);
  }, [setPassword, range, characters, numbers]);

  useEffect(() => {
    passwordGenerator();
  }, [range, numbers, characters, setPassword]);

  const passRef = useRef();

  const onButtonClick = () => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
    const btn = document.getElementById("copyBtn");
    setTimeout(() => {
      btn.innerText = "copy";
    }, 2000);
    btn.innerText = "copied";
  };

  return (
    <>
      <div className="w-full h-screen bg-orange-400">
        <div className="fixed w-full top-12">
          <div className="w-full max-w-lg rounded-lg bg-white px-5 py-5 mx-auto flex flex-col items-center space-y-7">
            <h1 className="text-3xl font-bold text-gray-700">
              Password Generator
            </h1>
            <div className="space-x-3">
              <input
                ref={passRef}
                value={password}
                type="text"
                id="input"
                className="border-2 px-3 py-2 rounded-lg text-xl outline-none"
              />
              <button
                type="button"
                className="bg-blue-500 px-3 py-2 rounded-lg text-xl text-white font-bold w-25 cursor-pointer text-center"
                id="copyBtn"
                onClick={() => onButtonClick()}
              >
                copy
              </button>
            </div>
            <div className="w-full flex flex-col items-center">
              <input
                value={range}
                type="range"
                id="range"
                min={5}
                max={50}
                className="w-full  max-w-sm"
                onChange={(e) => setRange(e.target.value)}
              />
              <p className="text-xl font-bold">Length: {range}</p>
            </div>
            <div className="border-2 w-full px-4 py-4 rounded-lg space-y-5">
              <div className="w-full flex justify-between items-center">
                <label htmlFor="character" className="font-bold text-xl">
                  Characters
                </label>
                <input
                  type="checkbox"
                  checked={characters}
                  onChange={() => setCharacters(!characters)}
                  id="character"
                  className="h-7 w-7"
                />
              </div>
              <div className="w-full flex justify-between items-center">
                <label htmlFor="numbers" className="font-bold text-xl">
                  Numbers
                </label>
                <input
                  type="checkbox"
                  checked={numbers}
                  onClick={() => setNumbers(!numbers)}
                  id="numbers"
                  className="h-7 w-7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
