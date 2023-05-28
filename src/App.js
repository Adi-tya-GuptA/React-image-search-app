// import logo from "./logo.svg";
import Searchbar from "./components/searchbar";
import "./App.css";
import { useState } from "react";
import Imagelist from "./components/imglist";
function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <Searchbar input={input} setInput={setInput} />
      <Imagelist input={input} />
    </div>
  );
}

export default App;
