// import logo from "./logo.svg";
import Searchbar from "./components/searchbar";
import "./App.css";
import Searchimg from "./api";
import { useState } from "react";
import Imagelist from "./components/imglist";
function App() {
  const [image, setimage] = useState([]);

  const handlesubmit = async (term) => {
    // console.log(`do a search with ${term}`);
    const result = await Searchimg(term);
    // console.log(result);
    setimage(result);
  };

  return (
    <div className="App">
      <Searchbar onsubmit={handlesubmit} />
      <Imagelist images={image} />
    </div>
  );
}

export default App;
