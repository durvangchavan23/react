import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 class="text-3xl font-bold underline text-center">Hello world!</h1>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
